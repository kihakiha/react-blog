import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

const AboutPage: React.FC = () => {
  const { t } = useTranslation()

  return <Page>{t('О нас')}</Page>
}

export default AboutPage
