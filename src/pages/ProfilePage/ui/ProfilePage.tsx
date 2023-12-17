import { profileReducer } from 'entities/Profile'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = () => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        {t('Страница профиля')}
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
