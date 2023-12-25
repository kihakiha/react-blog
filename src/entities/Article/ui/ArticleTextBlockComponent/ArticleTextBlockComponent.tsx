import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ETextTheme, Text } from 'shared/ui/Text'
import { IArticleTextBlock } from '../../model/types/article';

import styles from './ArticleTextBlockComponent.module.scss';

interface IArticleTextBlockComponentProps {
  className?: string;
  block: IArticleTextBlock;
}
export const ArticleTextBlockComponent = React.memo((props: IArticleTextBlockComponentProps) => {
  const {
    className = '',
    block,
  } = props;

  const { t } = useTranslation();
  return (
    <div className={cn(styles.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} theme={ETextTheme.PRIMARY} className={styles.title} />
      )}
      {
        block.paragraphs.map((paragraph, index) => (
          <Text key={index} text={paragraph} className={styles.paragraph} />
        ))
      }
    </div>
  );
});
