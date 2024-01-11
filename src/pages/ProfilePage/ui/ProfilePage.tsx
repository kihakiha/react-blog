import {
  ProfileCard,
  ValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateError,
  profileAction,
  profileReducer
} from 'entities/Profile'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch'
import { ECurrency } from 'entities/Currency'
import { ECountry } from 'entities/Country'
import { Text } from 'shared/ui/Text'
import { ETextTheme } from 'shared/ui/Text/ui/Text'
import { useInitialEffect } from 'shared/libs/hook/useInitialEffect'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { VStack } from 'shared/ui/Stack'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = () => {
  const { t } = useTranslation('profile')

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateError)

  const { id } = useParams<{ id: string }>()

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
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <VStack max gap={20}>
          <ProfilePageHeader />
          {validateErrors?.length && validateErrors.map((err) => (
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
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
