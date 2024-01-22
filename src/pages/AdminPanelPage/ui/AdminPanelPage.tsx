import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/libs/classNames/classNames';
import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page';

interface IAdminPanelPageProps {
  className?: string;
}
const AdminPanelPage = (props: IAdminPanelPageProps) => {
  const {
    className = ''
  } = props

  const { t } = useTranslation();

  return (
    <Page className={cn('', {}, [className])}>
      <Text title={t('Админ панель')} />
    </Page>
  );
};

export default AdminPanelPage
