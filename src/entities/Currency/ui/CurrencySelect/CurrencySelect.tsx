import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { ECurrency } from '../../model/types/Currency';

interface ICurrencySelectProps {
  className?: string;
  value?: ECurrency;
  onChange?: (value: ECurrency) => void;
  readonly?: boolean;
}

const options = [
  { value: ECurrency.RUB, content: ECurrency.RUB },
  { value: ECurrency.CNY, content: ECurrency.CNY },
  { value: ECurrency.USD, content: ECurrency.USD },
  { value: ECurrency.EUR, content: ECurrency.EUR },
]

export const CurrencySelect = React.memo((props: ICurrencySelectProps) => {
  const {
    className = '',
    value,
    onChange,
    readonly
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = React.useCallback((changeValue: string) => {
    onChange?.(changeValue as ECurrency)
  }, [onChange]);

  return (
    <Select
      label={t('Валюта')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      className={className}
    />
  );
});
