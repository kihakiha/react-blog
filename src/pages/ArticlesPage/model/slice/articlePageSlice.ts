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
    viewType: EArticleViewType.CELLS
  }),
  reducers: {
    setViewType: (state, action: PayloadAction<EArticleViewType>) => {
      state.viewType = action.payload
      localStorage.setItem(ARTICLE_VIEWTYPE_LOCALSTORAGE_KEY, action.payload)
    },
    initState: (state) => {
      state.viewType = localStorage.getItem(ARTICLE_VIEWTYPE_LOCALSTORAGE_KEY) as EArticleViewType
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
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
