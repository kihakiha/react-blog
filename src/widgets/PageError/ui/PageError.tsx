import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';

interface IPageErrorProps {
  className: string;
}
export const PageError: React.FC = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();

  const refreshPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={cn(styles.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button theme={EButtonTheme.CLEAR} onClick={refreshPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
