import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticlesPage.module.scss';

interface IArticlesPageProps {
  className?: string;
}
const ArticlesPage = ({ className = '' }: IArticlesPageProps) => {
  const { t } = useTranslation('article');
  return (
    <div className={cn(styles.ArticlesPage, {}, [className])}>
      <h1>{t('Страница всех статей')}</h1>
    </div>
  );
};

export default React.memo(ArticlesPage);
