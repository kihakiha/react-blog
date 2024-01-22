import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import { IComment } from '@/entities/Comment'
import { IArticle } from '@/entities/Article'
import { articleDetailsRecommendationSchema } from '../types/ArticleDetailsRecommendationSchema'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations'

const recommendationsAdapter = createEntityAdapter({
  selectId: (article: IArticle) => article.id,
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const ArticleDetailsPageRecommendationSlice = createSlice({
  name: 'ArticleDetailsPageRecommendationSlice',
  initialState: recommendationsAdapter.getInitialState<articleDetailsRecommendationSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      })
  },
})

export const { reducer: articleDetailsPageRecommendationReducer } = ArticleDetailsPageRecommendationSlice
