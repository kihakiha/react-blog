import React from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { EditableProfileCard } from '@/features/EditableProfileCard'
import { ETextTheme, ETextAlign, Text } from '@/shared/ui/Text'

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()

  const { t } = useTranslation('profile')

  if (!id) {
    return (
      <Text
        title={t('Произошла ошибка при загрузке профиля')}
        text={`${t('Обновите страницу или попробуйте позже')}:d`}
        theme={ETextTheme.ERROR}
        align={ETextAlign.CENTER}
      />
    )
  }

  return (
    <Page>
      <VStack max gap={20}>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
