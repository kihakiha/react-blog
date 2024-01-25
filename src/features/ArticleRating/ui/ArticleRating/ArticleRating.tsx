import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/libs/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/ArticleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface IArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = (props: IArticleRatingProps) => {
  const {
    className = '',
    articleId
  } = props

  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData)

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? ''
  });

  const [rateArticleMutation] = useRateArticle()

  const rating = data?.[0]

  const handleRate = React.useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: starsCount,
        feedback
      })
    } catch (e) {
      console.log(e);
    }
  }, [articleId, rateArticleMutation, userData?.id])

  const onAccept = React.useCallback((starsCount: number, feedback?: string) => {
    handleRate(starsCount, feedback)
  }, [handleRate])

  const onCancel = React.useCallback((starsCount: number) => {
    handleRate(starsCount)
  }, [handleRate])

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  return (
    <RatingCard
      rate={rating?.rate}
      className={cn('', {}, [className])}
      title={t('Как вам статья?')}
      feedbackTitle={t('Оставьте свой отзыв о статье')}
      hasFeedback
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
};

export default ArticleRating;
