import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text'
import { ETextAlign, ETextSize } from 'shared/ui/Text/ui/Text';
import ViewsIcon from 'shared/assets/icons/views.svg'
import { Icon } from 'shared/ui/Icon';
import { Card } from 'shared/ui/Card';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';
import {
  EArticleBlockType, EArticleViewType, IArticle, IArticleTextBlock
} from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';

import styles from './ArticleListItem.module.scss';

interface IArticleListItemProps {
  className?: string;
  article: IArticle;
  viewType: EArticleViewType;
}
export const ArticleListItem = (props: IArticleListItemProps) => {
  const {
    className = '',
    article,
    viewType,
  } = props;

  const { t } = useTranslation('article');

  const navigate = useNavigate()

  const onOpenArticle = React.useCallback(() => {
    navigate(RoutePaths.article_details + article.id)
  }, [article.id, navigate])

  const views = (
    <div className={styles.viewsWrapper}>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={ViewsIcon} />
    </div>
  )
  const tags = <Text text={article.tags.join(', ')} className={styles.tags} />

  if (viewType === EArticleViewType.LIST) {
    const textBlock = article.blocks.find((block) => block.type === EArticleBlockType.TEXT) as IArticleTextBlock;

    return (
      <div className={cn(styles.ArticleListItem, {}, [className, styles[viewType]])}>
        <Card>
          <div className={styles.header}>
            <div className={styles.userInfo}>
              {article.user.avatar && <Avatar size={30} src={article.user.avatar} />}
              <Text text={article.user.username} className={styles.username} />
            </div>
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.title} size={ETextSize.M} />
          {tags}
          <img src={article.img} alt={article.title} className={styles.image} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />}
          <div className={styles.footer}>
            <Button onClick={onOpenArticle}>{t('Читать далее...')}</Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={cn(styles.ArticleListItem, {}, [className, styles[viewType]])}>
      <Card onClick={onOpenArticle}>
        <div className={styles.imageWrapper}>
          <img src={article.img} alt={article.title} className={styles.image} />
          <Text text={article.createdAt} size={ETextSize.XS} align={ETextAlign.RIGHT} className={styles.date} />
        </div>
        <div className={styles.articleInfo}>
          {tags}
          {views}
        </div>
        <Text title={article.title} className={styles.title} size={ETextSize.XS} />
      </Card>
    </div>
  );
};
