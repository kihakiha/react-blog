import React, { Suspense } from 'react';
import { IArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton';

const ArticleRatingAsync = React.lazy(async () => import('./ArticleRating'));

export const ArticleRatingLazy = (props: IArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={120} />}>
    <ArticleRatingAsync {...props} />
  </Suspense>
)
