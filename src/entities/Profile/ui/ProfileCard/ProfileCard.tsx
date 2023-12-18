import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text'
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import styles from './ProfileCard.module.scss';

interface IProfileCardProps {
  className?: string;
}
export const ProfileCard = ({ className = '' }: IProfileCardProps) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  return (
    <div className={cn(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Профиль')} />
        <Button theme={EButtonTheme.CLEAR}>{t('Редактировать')}</Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.firstName}
          placeholder={t('Имя')}
          className={styles.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Фамилия')}
          className={styles.input}
        />
        <Input
          value={String(data?.age)}
          placeholder={t('Возраст')}
          className={styles.input}
        />
      </div>
    </div>
  );
};
