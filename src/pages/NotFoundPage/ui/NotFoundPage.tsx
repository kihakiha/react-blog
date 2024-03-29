import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/libs/classNames/classNames';

import { Page } from '@/widgets/Page';
import styles from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: INotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={cn(styles.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  );
};
