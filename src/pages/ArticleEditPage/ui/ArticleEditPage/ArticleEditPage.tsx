import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text'

interface IArticleEditPageProps {
  className?: string;
}
const ArticleEditPage = ({ className = '' }: IArticleEditPageProps) => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id)

  return (
    <Page>
      <Text title={isEdit ? t('Редактирование статьи') : t('Новая статья')} />
    </Page>
  );
};

export default ArticleEditPage
