import { IRating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface IGetArticleRatingProps {
  userId: string,
  articleId: string
}

interface IRateArticle {
  userId: string,
  articleId: string,
  rate: number,
  feedback?: string,

}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRaging: build.query<IRating[], IGetArticleRatingProps>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId
        }
      }),
    }),

    rateArticle: build.mutation<void, IRateArticle>({
      query: (args) => ({
        url: '/article-ratings',
        method: 'POST',
        body: args
      }),
    }),
  }),
})

export const useGetArticleRating = articleRatingApi.useGetArticleRagingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
