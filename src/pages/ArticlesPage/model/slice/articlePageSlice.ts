import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { EArticleViewType, IArticle } from 'entities/Article'
import { ARTICLE_VIEWTYPE_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
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
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEWTYPE_LOCALSTORAGE_KEY) as EArticleViewType;
      state.viewType = view;
      state.limit = view === EArticleViewType.LIST ? 4 : 12;
      state._inited = true;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.hasMore = action.payload.length > 0;
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
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
