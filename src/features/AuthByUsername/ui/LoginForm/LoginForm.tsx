import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { ETextTheme } from 'shared/ui/Text/ui/Text';
import { Text } from 'shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import styles from './LoginForm.module.scss';
import { loginAction, loginReducer } from '../../model/slice/LoginSlice';
import { loginByUsername } from '../../model/services/LoginByUsername';

export interface ILoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm: React.FC = React.memo(({ className = '' }: ILoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

  const onChangeUsername = React.useCallback((value: string) => {
    dispatch(loginAction.setUsername(value));
  }, [dispatch])

  const onChangePassword = React.useCallback((value: string) => {
    dispatch(loginAction.setPassword(value));
  }, [dispatch])

  const onLoginClick = React.useCallback(() => {
    // @ts-ignore
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password])

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={cn(styles.LoginForm, {}, [className])}>
        <Text title={t('Авторизация')} />
        {error && (
        <Text text={t('Неверный логин или пароль')} theme={ETextTheme.ERROR} />
        )}
        <Input
          type="text"
          className={styles.input}
          placeholder={t('Логин')}
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="password"
          className={styles.input}
          placeholder={t('Пароль')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={EButtonTheme.BACKGROUND}
          size={EButtonSize.M}
          className={styles.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm
