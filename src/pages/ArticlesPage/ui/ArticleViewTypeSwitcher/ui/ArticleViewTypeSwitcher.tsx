import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { EArticleViewType } from 'entities/Article';

import ViewTypeListIcon from 'shared/assets/icons/ListSquareIcon.svg'
import ViewTypeCellsIcon from 'shared/assets/icons/TiledIcon.svg'

import { Button, EButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import styles from './ArticleViewTypeSwitcher.module.scss';

interface IArticleViewTypeSwitcherProps {
  className?: string;
  viewType: EArticleViewType;
  onViewTypeClick?: (viewType: EArticleViewType) => void;
}

const viewTypes = [
  {
    viewType: EArticleViewType.CELLS,
    icon: ViewTypeCellsIcon
  },
  {
    viewType: EArticleViewType.LIST,
    icon: ViewTypeListIcon
  },
]

export const ArticleViewTypeSwitcher = (props: IArticleViewTypeSwitcherProps) => {
  const {
    className = '',
    viewType,
    onViewTypeClick
  } = props

  const onChangeType = (newView: EArticleViewType) => () => {
    onViewTypeClick?.(newView)
  }

  return (
    <div className={cn(styles.ArticleViewTypeSwitcher, {}, [className])}>
      {viewTypes.map((type) => (
        <Button
          key={type.viewType}
          theme={EButtonTheme.CLEAR}
          onClick={onChangeType(type.viewType)}
        >
          <Icon
            Svg={type.icon}
            className={cn('', { [styles.notSelected]: type.viewType !== viewType })}
          />
        </Button>
      ))}
    </div>
  )
};
