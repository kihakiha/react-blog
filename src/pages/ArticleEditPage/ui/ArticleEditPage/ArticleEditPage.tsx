import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text'
import styles from './ArticleEditPage.module.scss';

interface IArticleEditPageProps {
  className?: string;
}
const ArticleEditPage = ({ className = '' }: IArticleEditPageProps) => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id)

  return (
    <Page className={cn(styles.ArticleEditPage, {}, [className])}>
      <Text title={isEdit ? t('Редактирование статьи') : t('Новая статья')} />
    </Page>
  );
};

export default ArticleEditPage
