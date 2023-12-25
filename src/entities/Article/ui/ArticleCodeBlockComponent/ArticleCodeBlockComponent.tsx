import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { Code } from 'shared/ui/Code';
import { IArticleCodeBlock } from '../../model/types/article';
import styles from './ArticleCodeBlockComponent.module.scss';

interface IArticleCodeBlockComponentProps {
  className?: string;
  block: IArticleCodeBlock
}
export const ArticleCodeBlockComponent = React.memo(({ className = '', block }: IArticleCodeBlockComponentProps) => (
  <div className={cn(styles.ArticleCodeBlockComponent, {}, [className])}>
    <Code text={block.code} />
  </div>
));
