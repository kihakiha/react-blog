import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import {
  ArticlesSortSelect, EArticleSortField, EArticleViewType, ETags
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/libs/hook/useDebounce';
import { ITabItem, Tabs } from 'shared/ui/Tabs';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageTag,
  getArticlesPageViewType
} from '../../../model/selectors/articlesPageSelectors/articlesPageSelectors';
import { articlesPageActions } from '../../../model/slice/articlePageSlice';
import { ArticleViewTypeSwitcher } from '../../ArticleViewTypeSwitcher/ui/ArticleViewTypeSwitcher';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';

import styles from './ArticlesPageFilters.module.scss';

interface IArticlesPageFiltersProps {
  className?: string;
}
export const ArticlesPageFilters = ({ className = '' }: IArticlesPageFiltersProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const viewType = useSelector(getArticlesPageViewType)

  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const tag = useSelector(getArticlesPageTag)

  const fetchData = React.useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch]);

  const debounncedFetchData = useDebounce(fetchData, 500)

  const onChangeViewType = React.useCallback((type: EArticleViewType) => {
    dispatch(articlesPageActions.setViewType(type))
  }, [dispatch]);

  const onChangeOrder = React.useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData()
  }, [dispatch, fetchData]);

  const onChangeSort = React.useCallback((newSort: EArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData()
  }, [dispatch, fetchData]);

  const onChangeSearch = React.useCallback((searchReq: string) => {
    dispatch(articlesPageActions.setSearch(searchReq));
    dispatch(articlesPageActions.setPage(1));
    debounncedFetchData()
  }, [dispatch, debounncedFetchData]);

  const onChangeTag = React.useCallback((tab: ITabItem) => {
    dispatch(articlesPageActions.setTag(tab.content as ETags));
    dispatch(articlesPageActions.setPage(1));
    fetchData()
  }, [dispatch, fetchData]);

  const tagsList = Object.entries(ETags).map(([value, content]) => ({ value, content }));

  return (
    <div className={cn(styles.ArticlesPageFilters, {}, [className])}>
      <div className={styles.sortWrapper}>
        <ArticlesSortSelect
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewTypeSwitcher viewType={viewType} onViewTypeClick={onChangeViewType} />
      </div>
      <Card className={styles.search}>
        <Input onChange={onChangeSearch} value={search} placeholder={`${t('Поиск')}...`} />
      </Card>
      <Tabs
        className={styles.tags}
        tabs={tagsList}
        value={tag}
        onTabClick={onChangeTag}
      />
    </div>
  );
};
