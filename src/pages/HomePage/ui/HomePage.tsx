import { Counter } from 'entities/Counter'
import React from 'react'
import { useTranslation } from 'react-i18next'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t('Главная страница')}
      <Counter />
    </div>
  )
}

export default HomePage
