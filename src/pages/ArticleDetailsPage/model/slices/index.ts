import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';
import { articleDetailsPageRecommendationReducer } from './ArticleDetailsPageRecommendationSlice';

export const articleDetailsPageReducer = combineReducers({
  recommendations: articleDetailsPageRecommendationReducer,
  comments: articleDetailsCommentsReducer
})
