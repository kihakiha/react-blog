import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { Code } from 'shared/ui/Code';
import { IArticleCodeBlock } from '../../model/types/article';

interface IArticleCodeBlockComponentProps {
  className?: string;
  block: IArticleCodeBlock
}
export const ArticleCodeBlockComponent = React.memo(({ className = '', block }: IArticleCodeBlockComponentProps) => (
  <div>
    <Code text={block.code} />
  </div>
));
