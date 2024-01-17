import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { ETextTheme, Text } from 'shared/ui/Text'
import styles from './ForibiddenPage.module.scss';

interface IForibiddenPageProps {
  className?: string;
}
const ForibiddenPage = (props: IForibiddenPageProps) => {
  const {
    className = ''
  } = props

  const { t } = useTranslation();
  return (
    <Page className={cn(styles.ForibiddenPage, {}, [className])}>
      <Text theme={ETextTheme.ERROR} title={t('У Вас нет доступа к этой странице')} />
    </Page>
  );
};

export default ForibiddenPage
