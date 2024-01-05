import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { Card } from 'shared/ui/Card'
import { Skeleton } from 'shared/ui/Skeleton';
import { EArticleViewType } from '../../../model/types/article';

import styles from './ArticleListItem.module.scss';

interface IArticleListItemSkeletonProps {
  className?: string;
  viewType: EArticleViewType;
}
export const ArticleListItemSkeleton = (props: IArticleListItemSkeletonProps) => {
  const {
    className = '',
    viewType,
  } = props;

  if (viewType === EArticleViewType.LIST) {
    return (
      <div className={cn(styles.ArticleListItem, {}, [className, styles[viewType]])}>
        <Card>
          <div className={styles.header}>
            <div className={styles.userInfo}>
              <Skeleton width={30} height={30} border="50%" />
              <Skeleton width={150} height={16} className={styles.username} />
            </div>
            <Skeleton width={80} height={16} className={styles.date} />
          </div>
          <Skeleton width={250} height={24} className={styles.title} />
          <Skeleton height={250} className={styles.image} />
          <div className={styles.footer}>
            <Skeleton width={160} height={40} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={cn(styles.ArticleListItem, {}, [className, styles[viewType]])}>
      <Card>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.image} />
        </div>
        <div className={styles.articleInfo}>
          <Skeleton width={130} height={16} />
          <Skeleton width={40} height={16} />
        </div>
        <Skeleton width={170} height={16} className={styles.title} />
      </Card>
    </div>
  );
};
