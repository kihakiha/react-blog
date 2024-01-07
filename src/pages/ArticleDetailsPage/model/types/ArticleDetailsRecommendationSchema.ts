import { EntityState } from '@reduxjs/toolkit';
import { IArticle } from 'entities/Article';

export interface articleDetailsRecommendationSchema extends EntityState<IArticle, string> {
  error?: string;
  isLoading?: boolean;
}
