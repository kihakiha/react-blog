import React from 'react';
import { TMods, cn } from 'shared/libs/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { ETextAlign, ETextTheme } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { Select } from 'shared/ui/Select';
import { CurrencySelect, ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country/model/types/counrty';
import { CountrySelect } from 'entities/Country';
import { IProfile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface IProfileCardProps {
  className?: string;
  data?: IProfile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: ECurrency) => void;
  onChangeCountry?: (country?: ECountry) => void;
}
export const ProfileCard = (props: IProfileCardProps) => {
  const {
    className = '',
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile')

  const mods: TMods = {
    [styles.editing]: !readonly,
  }

  if (isLoading) {
    return (
      <div className={cn(styles.ProfileCard, { [styles.loading]: true }, [className])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={cn(styles.ProfileCard, {}, [className, styles.error])}>
        <Text
          title={t('Произошла ошибка при загрузке профиля')}
          text={`${t('Обновите страницу или попробуйте позже')}:d`}
          theme={ETextTheme.ERROR}
          align={ETextAlign.CENTER}
        />
      </div>
    )
  }
  return (
    <div className={cn(styles.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={styles.AvatarWrapper}>
          <Avatar size={250} src={data?.avatar} alt="Profile avatar" />
        </div>
      )}
      <div className={styles.data}>
        <Input
          value={data?.firstName}
          placeholder={t('Имя')}
          className={styles.input}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Фамилия')}
          className={styles.input}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('Возраст')}
          type="number"
          className={styles.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('Город')}
          className={styles.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('Имя пользователя')}
          className={styles.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Ссылка на аватар')}
          className={styles.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={styles.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={styles.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
