import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { ETextAlign, ETextTheme, Text } from 'shared/ui/Text'
import styles from './ArticleDetailsPage.module.scss';

interface IArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage = ({ className = '' }: IArticleDetailsPageProps) => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={cn(styles.ArticleDetailsPage, {}, [className])}>
        <Text title={t('Ошибка 404')} text={`${t('Статья не найдена')} :d`} theme={ETextTheme.ERROR} align={ETextAlign.CENTER} />
      </div>
    )
  }

  return (
    <div className={cn(styles.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails articleId={id} />
    </div>
  );
};

export default React.memo(ArticleDetailsPage);
