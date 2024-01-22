import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import {
  EArticleSortField, EArticleViewType, ETags, IArticle
} from '@/entities/Article'
import { ARTICLE_VIEWTYPE_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { SortOrder } from '@/shared/types'
import { articlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'

const articlesAdapter = createEntityAdapter({
  selectId: (article: IArticle) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<articlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    viewType: EArticleViewType.CELLS,
    page: 1,
    hasMore: true,
    limit: 9,
    order: 'asc',
    sort: EArticleSortField.CREATED,
    search: '',
    tag: ETags.ALL,
    _inited: false,
  }),
  reducers: {
    setViewType: (state, action: PayloadAction<EArticleViewType>) => {
      state.viewType = action.payload
      localStorage.setItem(ARTICLE_VIEWTYPE_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setSort: (state, action: PayloadAction<EArticleSortField>) => {
      state.sort = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setTag: (state, action: PayloadAction<ETags>) => {
      state.tag = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEWTYPE_LOCALSTORAGE_KEY) as EArticleViewType;
      state.viewType = view;
      state.limit = view === EArticleViewType.LIST ? 4 : 14;
      state._inited = true;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;
        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      })
  },
})

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions
} = articlesPageSlice
