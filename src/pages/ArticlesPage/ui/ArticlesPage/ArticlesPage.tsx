import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList, EArticleViewType, IArticle } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/libs/hook/useInitialEffect';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import { useSelector } from 'react-redux';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
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

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(styles.ArticlesPage, {}, [className])}>
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
      </div>
    </DynamicModuleLoader>
  );
};

export default React.memo(ArticlesPage);
