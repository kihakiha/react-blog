import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { cn } from '@/shared/libs/classNames/classNames';
import { ETextAlign, ETextTheme, Text } from '@/shared/ui/Text'
import { ArticleList } from '@/entities/Article';
import { Page } from '@/widgets/Page';
import { useAppDispatch } from '@/shared/libs/hook/useAppDispatch';
import { useInitialEffect } from '@/shared/libs/hook/useInitialEffect';
import { getArticles } from '../../../model/slice/articlePageSlice';
import { initArticlesPage } from '../../../model/services/initArticlesPage/initArticlesPage';
import {
  getArticlesPageIsLoading,
  getArticlesPageError,
  getArticlesPageViewType
} from '../../../model/selectors/articlesPageSelectors/articlesPageSelectors';

interface IArticleInfiniteListProps {
  className?: string;
}
export const ArticleInfiniteList = (props: IArticleInfiniteListProps) => {
  const {
    className = ''
  } = props

  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll)

  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const viewType = useSelector(getArticlesPageViewType)

  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  });

  if (error) {
    return (
      <Page className={cn('', {}, [className])}>
        <Text text="Произошла непредвиденная ошибка" theme={ETextTheme.ERROR} align={ETextAlign.CENTER} />
      </Page>
    )
  }

  return (
    <ArticleList
      className={className}
      isLoading={isLoading}
      error={error}
      viewType={viewType}
      articles={articles}
    />
  );
};
