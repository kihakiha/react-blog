import { EntityState } from '@reduxjs/toolkit';
import {
  EArticleSortField, EArticleViewType, ETags, IArticle
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface articlesPageSchema extends EntityState<IArticle, string> {
  error?: string;
  isLoading?: boolean;
  _inited?: boolean;

  // Filters
  viewType: EArticleViewType;
  order: SortOrder
  sort: EArticleSortField
  search: string;
  tag: ETags

  // Pagination
  page: number;
  limit: number;
  hasMore: boolean;
}
