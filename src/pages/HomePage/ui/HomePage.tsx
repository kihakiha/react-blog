import React from 'react'
import { useTranslation } from 'react-i18next'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (<div>{t('Главная страница')}</div>)
}

export default HomePage
