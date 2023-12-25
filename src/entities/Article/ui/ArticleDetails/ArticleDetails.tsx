import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, ETextAlign, ETextTheme } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import ViewsIcon from 'shared/assets/icons/views.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ETextSize } from 'shared/ui/Text/ui/Text';
import { Icon } from 'shared/ui/Icon';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/getArticlesDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { EArticleBlockType, IArticleBlock } from '../../model/types/article';

import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

import styles from './ArticleDetails.module.scss';

interface IArticleDetailsProps {
  className?: string;
  articleId: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = React.memo((props: IArticleDetailsProps) => {
  const { className = '', articleId } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const data = useSelector(getArticleDetailsData)

  const renderBlock = React.useCallback((block: IArticleBlock) => {
    switch (block.type) {
      case EArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={styles.block} block={block} />
      case EArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={styles.block} block={block} />
      case EArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={styles.block} block={block} />
      default:
        return null;
    }
  }, [])

  React.useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(articleId));
    }
  }, [articleId, dispatch]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton width={200} height={200} border="50%" className={styles.avatar} />
        <Skeleton width={300} height={32} className={styles.title} />
        <Skeleton width={600} height={24} className={styles.skeleton} />
        <Skeleton width="100%" height={200} className={styles.skeleton} />
        <Skeleton width="100%" height={200} className={styles.skeleton} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        title={t('Произошла ошибка при загрузке статьи')}
        text={`${t('Обновите страницу или попробуйте позже')}:d`}
        theme={ETextTheme.ERROR}
        align={ETextAlign.CENTER}
      />
    )
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar
            className={styles.avatar}
            size={200}
            src={data?.img}
            alt="Article image"
          />
        </div>
        <Text
          className={styles.title}
          title={data?.title}
          text={data?.subtitle}
          theme={ETextTheme.PRIMARY}
          size={ETextSize.L}
        />
        <div className={styles.articleInfo}>
          <Icon Svg={ViewsIcon} className={styles.icon} />
          <Text text={String(data?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon Svg={CalendarIcon} className={styles.icon} />
          <Text text={String(data?.createdAt)} />
        </div>
        {data?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(styles.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
