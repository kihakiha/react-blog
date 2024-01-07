import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/libs/hook/useInitialEffect';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import { useSelector } from 'react-redux';
import { ETextAlign, ETextTheme, Text } from 'shared/ui/Text'
import { Page } from 'widgets/Page';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageViewType
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors';
import { articlesPageReducer, getArticles } from '../../model/slice/articlePageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ui/ArticlesPageFilters';

import styles from './ArticlesPage.module.scss';

interface IArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}
const ArticlesPage = ({ className = '' }: IArticlesPageProps) => {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll)

  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const viewType = useSelector(getArticlesPageViewType)

  const [searchParams] = useSearchParams()

  const onLoadNextPart = React.useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  });

  if (error) {
    return (
      <Page className={cn(styles.ArticlesPage, {}, [className])}>
        <Text text="Произошла непредвиденная ошибка" theme={ETextTheme.ERROR} align={ETextAlign.CENTER} />
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={cn(styles.ArticlesPage, {}, [className])}>
        <div className={styles.header}>
          <ArticlesPageFilters />
        </div>
        <ArticleList
          isLoading={isLoading}
          error={error}
          viewType={viewType}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default React.memo(ArticlesPage);
