import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text'
import { Page } from 'widgets/Page';
import styles from './AdminPanelPage.module.scss';

interface IAdminPanelPageProps {
  className?: string;
}
const AdminPanelPage = (props: IAdminPanelPageProps) => {
  const {
    className = ''
  } = props

  const { t } = useTranslation();

  return (
    <Page className={cn(styles.AdminPanelPage, {}, [className])}>
      <Text title={t('Админ панель')} />
    </Page>
  );
};

export default AdminPanelPage
