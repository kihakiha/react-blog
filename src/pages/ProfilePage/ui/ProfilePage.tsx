import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = () => {
  const { t } = useTranslation()

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
