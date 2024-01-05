import { EntityState } from '@reduxjs/toolkit';
import { EArticleViewType, IArticle } from 'entities/Article';

export interface articlesPageSchema extends EntityState<IArticle, string> {
  error?: string;
  isLoading?: boolean;

  viewType: EArticleViewType
}
