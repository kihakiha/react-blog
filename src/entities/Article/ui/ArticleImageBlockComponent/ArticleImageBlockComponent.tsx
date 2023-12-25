import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { ETextAlign, Text } from 'shared/ui/Text'
import { ETextSize } from 'shared/ui/Text/ui/Text';
import { IArticleImageBlock } from '../../model/types/article';

import styles from './ArticleImageBlockComponent.module.scss';

interface IArticleImageBlockComponentProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlockComponent = React.memo(({ className = '', block }: IArticleImageBlockComponentProps) => (
  <div className={cn(styles.ArticleImageBlockComponent, {}, [className])}>
    <img src={block.src} alt={block.title} />
    {block.title && <Text title={block.title} align={ETextAlign.CENTER} size={ETextSize.XS} />}
  </div>
));
