import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import styles from './LoginForm.module.scss';

interface ILoginFormProps {
  className: string;
}
export const LoginForm: React.FC = ({ className }: ILoginFormProps) => {
  const { t } = useTranslation();

  return (
    <form className={cn(styles.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={styles.input}
        placeholder="Username"
        autofocus
      />
      <Input
        type="password"
        className={styles.input}
        placeholder="Пароль"
      />
      <Button
        theme={EButtonTheme.BACKGROUND}
        size={EButtonSize.M}
        className={styles.loginBtn}
      >
        {t('Войти')}
      </Button>
    </form>
  );
};
