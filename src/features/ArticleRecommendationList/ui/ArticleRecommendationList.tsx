import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/libs/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text'
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../api/articleRecommendationAPI';

interface IArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = (props: IArticleRecommendationListProps) => {
  const {
    className = ''
  } = props

  const { t } = useTranslation('article');

  const { data: articles, error, isLoading } = useArticleRecommendationsList(4);

  if (error || isLoading || !articles) {
    return null
  }

  return (
    <VStack gap={16} className={cn('', {}, [className])}>
      <Text
        title={t('Рекомендуем')}
      />
      <ArticleList
        target="_blank"
        articles={articles}
      />
    </VStack>
  );
};
