import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

import styles from './LanguageSwitcher.module.scss';

interface ILanguageSwitcherProps {
  className: string;
}
export const LanguageSwitcher: React.FC = ({ className }: ILanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <div>
      <Button
        theme={EButtonTheme.CLEAR}
        onClick={toggleLanguage}
        className={cn(styles.LanguageSwitcher, {}, [className, styles.button])}>
        {t('Язык')}
      </Button>
    </div>
  );
};
