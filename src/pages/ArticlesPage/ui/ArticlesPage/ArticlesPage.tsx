import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList, EArticleViewType, IArticle } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/libs/hook/useInitialEffect';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ETextAlign, ETextTheme, Text } from 'shared/ui/Text'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageViewType
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlePageSlice';
import { ArticleViewTypeSwitcher } from '../ArticleViewTypeSwitcher/ui/ArticleViewTypeSwitcher';

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

  const onChangeViewType = React.useCallback((type: EArticleViewType) => {
    dispatch(articlesPageActions.setViewType(type))
  }, [dispatch]);

  const onLoadNextPart = React.useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState())
    dispatch(fetchArticlesList({ page: 1 }))
  });

  if (error) {
    return (
      <Page className={cn(styles.ArticlesPage, {}, [className])}>
        <Text text="Произошла непредвиденная ошибка" theme={ETextTheme.ERROR} align={ETextAlign.CENTER} />
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page onScrollEnd={onLoadNextPart} className={cn(styles.ArticlesPage, {}, [className])}>
        <div className={styles.header}>
          <h1>{t('Статьи')}</h1>
          <ArticleViewTypeSwitcher viewType={viewType} onViewTypeClick={onChangeViewType} />
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
