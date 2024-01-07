import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { articleDetailsRecommendationSchema } from './ArticleDetailsRecommendationSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: articleDetailsRecommendationSchema;
}
