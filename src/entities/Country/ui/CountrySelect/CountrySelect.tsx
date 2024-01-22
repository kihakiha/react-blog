import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { ECountry } from '../../model/types/counrty';

interface ICountrySelectProps {
  className?: string;
  value?: ECountry;
  onChange?: (value: ECountry) => void;
  readonly?: boolean;
}

const options = [
  { value: ECountry.RUSSIA, content: ECountry.RUSSIA },
  { value: ECountry.USA, content: ECountry.USA },
  { value: ECountry.UKRAINE, content: ECountry.UKRAINE },
  { value: ECountry.KAZAKHSTAN, content: ECountry.KAZAKHSTAN },
  { value: ECountry.ITALY, content: ECountry.ITALY },
  { value: ECountry.GERMANY, content: ECountry.GERMANY },
  { value: ECountry.GB, content: ECountry.GB },
  { value: ECountry.FRANCE, content: ECountry.FRANCE },
  { value: ECountry.CHINA, content: ECountry.CHINA },
  { value: ECountry.CANADA, content: ECountry.CANADA },
  { value: ECountry.BELARUS, content: ECountry.BELARUS },
]

export const CountrySelect = React.memo((props: ICountrySelectProps) => {
  const {
    className = '',
    value,
    onChange,
    readonly
  } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = React.useCallback((changeValue: string) => {
    onChange?.(changeValue as ECountry)
  }, [onChange]);

  return (
    <ListBox
      items={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      label={t('Страна')}
      className={className}
      direction="top right"
    />
  );
});
