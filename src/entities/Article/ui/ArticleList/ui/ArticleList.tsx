import React, { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/libs/classNames/classNames';
import { ETextAlign, ETextTheme, Text } from '@/shared/ui/Text'
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
  target?: HTMLAttributeAnchorTarget
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
    target
  } = props

  const { t } = useTranslation('article');

  const renderArticle = (article: IArticle) => <ArticleListItem key={article.title + article.id} target={target} viewType={viewType} article={article} />

  if (!isLoading && !articles?.length) {
    return (
      <div className={cn(styles.ArticleList, {}, [className, styles[viewType]])}>
        <Text title={t('Статьи не найдены')} theme={ETextTheme.ERROR} />
      </div>
    )
  }

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
