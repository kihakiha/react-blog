import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ISelectOptions, Select } from 'shared/ui/Select';
import { EArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import styles from './ArticlesSortSelect.module.scss';

interface IArticlesSortSelectProps {
  className?: string;
  sort: EArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: EArticleSortField) => void;
}

export const ArticlesSortSelect = (props: IArticlesSortSelectProps) => {
  const {
    className = '',
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  } = props;
  const { t } = useTranslation('article');

  const orderOptions = React.useMemo<ISelectOptions<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('возрастанию')
    },
    {
      value: 'desc',
      content: t('убыванию')
    },
  ], [t]);

  const sortFieldsOptions = React.useMemo<ISelectOptions<EArticleSortField>[]>(() => [
    {
      value: EArticleSortField.CREATED,
      content: t('Дате')
    },
    {
      value: EArticleSortField.TITLE,
      content: t('Алфавиту')
    },
    {
      value: EArticleSortField.VIEWS,
      content: t('Просмотрам')
    },
  ], [t]);

  // const changeSortHandler = React.useCallback((newSort: string) => {
  //   onChangeSort(newSort as EArticleSortField);
  // }, [onChangeSort]);

  // const changeOrderHandler = React.useCallback((newOrder: string) => {
  //   onChangeOrder(newOrder as SortOrder);
  // }, [onChangeOrder]);

  return (
    <div className={cn(styles.ArticlesSortSelect, {}, [className])}>
      <Select<EArticleSortField>
        options={sortFieldsOptions}
        label={t('Сортировать по')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('по')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
};
