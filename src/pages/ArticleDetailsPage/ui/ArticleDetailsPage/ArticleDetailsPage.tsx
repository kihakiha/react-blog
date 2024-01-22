import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { cn } from '@/shared/libs/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { ETextAlign, ETextTheme, Text } from '@/shared/ui/Text'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ui/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ui/ArticleDetailsComments';

import styles from './ArticleDetailsPage.module.scss';

interface IArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({ className = '' }: IArticleDetailsPageProps) => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Page className={cn(styles.ArticleDetailsPage, {}, [className])}>
        <Text title={t('Ошибка 404')} text={`${t('Статья не найдена')} :d`} theme={ETextTheme.ERROR} align={ETextAlign.CENTER} />
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={cn(styles.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails articleId={id} />
        <ArticleRecommendationList />
        <ArticleDetailsComments articleId={id} className={styles.commentTitle} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default React.memo(ArticleDetailsPage);
