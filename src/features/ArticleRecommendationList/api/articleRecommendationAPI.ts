import { IArticle } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recommendationAPI = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<IArticle[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      }),
    }),
  }),
})

export const useArticleRecommendationsList = recommendationAPI.useGetArticleRecommendationsListQuery
