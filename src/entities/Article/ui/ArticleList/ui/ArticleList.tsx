import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { EArticleViewType, IArticle } from '../../../model/types/article';
import { ArticleListItem } from '../../ArticleListItem/ui/ArticleListItem';

import styles from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../../ArticleListItem/ui/ArticleListItemSkeleton';

interface IArticleListProps {
  className?: string;
  articles?: IArticle[]
  isLoading?: boolean;
  error?: string;
  viewType?: EArticleViewType;
}

const getSkeletons = (viewType: EArticleViewType) => new Array(viewType === EArticleViewType.CELLS ? 12 : 2).fill(0).map((item, index) => (
  <ArticleListItemSkeleton key={index} viewType={viewType} />
))

export const ArticleList = (props: IArticleListProps) => {
  const {
    className = '',
    articles,
    isLoading,
    error,
    viewType = EArticleViewType.CELLS,
  } = props

  const { t } = useTranslation();

  const renderArticle = (article: IArticle) => <ArticleListItem key={article.title + article.id} viewType={viewType} article={article} />

  return (
    <div className={cn(styles.ArticleList, {}, [className, styles[viewType]])}>
      {
        articles?.length
          ? articles?.map(renderArticle)
          : null
      }
      {isLoading && getSkeletons(viewType)}
    </div>
  );
};
