import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { RatingCard } from '@/entities/Rating'

const AboutPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page>
      {t('О нас')}

      <RatingCard
        title="Как вам статья"
        feedbackTitle="Оставьте отзыв"
        hasFeedback
      />
    </Page>
  )
}

export default AboutPage
