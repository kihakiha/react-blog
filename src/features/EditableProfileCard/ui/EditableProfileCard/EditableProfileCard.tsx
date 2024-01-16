import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import { useInitialEffect } from 'shared/libs/hook/useInitialEffect';
import { ETextTheme, Text } from 'shared/ui/Text';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateError } from '../../model/selectors/getProfileValidateError/getProfileValidateError';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileAction, profileReducer } from '../../model/slice/ProfileSlice';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface IEditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer
}

export const EditableProfileCard = (props: IEditableProfileCardProps) => {
  const {
    className = '',
    id
  } = props

  const { t } = useTranslation('profle');

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateError)

  const validateErrorTranslate = {
    [ValidateProfileError.INCCORECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCCORECT_USER_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  });

  const onChangeFirstName = React.useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ firstName: value || '' }))
  }, [dispatch])

  const onChangeLastName = React.useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ lastName: value || '' }))
  }, [dispatch])

  const onChangeAge = React.useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ age: Number(value || 0) }))
  }, [dispatch])

  const onChangeCity = React.useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeUsername = React.useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = React.useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCurrency = React.useCallback((currency?: ECurrency) => {
    dispatch(profileAction.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = React.useCallback((country?: ECountry) => {
    dispatch(profileAction.updateProfile({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <EditableProfileCardHeader />
      {validateErrors?.length && validateErrors.map((err: ValidateProfileError) => (
        <Text
          theme={ETextTheme.ERROR}
          text={validateErrorTranslate[err]}
          key={err}
        />
      ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </DynamicModuleLoader>
  );
};
