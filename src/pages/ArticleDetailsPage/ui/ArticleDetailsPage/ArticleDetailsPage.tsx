import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticleDetailsPage.module.scss';

interface IArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage = ({ className = '' }: IArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  return (
    <div className={cn(styles.ArticleDetailsPage, {}, [className])}>
      <h1>{t('Страница статьи')}</h1>
    </div>
  );
};

export default React.memo(ArticleDetailsPage);
