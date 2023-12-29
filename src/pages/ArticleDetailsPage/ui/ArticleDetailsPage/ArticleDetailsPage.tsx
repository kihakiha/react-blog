import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { ETextAlign, ETextTheme, Text } from 'shared/ui/Text'
import { CommentsList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from 'shared/libs/hook/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';

import styles from './ArticleDetailsPage.module.scss';

interface IArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage = ({ className = '' }: IArticleDetailsPageProps) => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentIsLoading = useSelector(getArticleDetailsCommentsIsLoading)
  const commentError = useSelector(getArticleDetailsCommentsError)

  const onSendComment = React.useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  })

  if (!id) {
    return (
      <div className={cn(styles.ArticleDetailsPage, {}, [className])}>
        <Text title={t('Ошибка 404')} text={`${t('Статья не найдена')} :d`} theme={ETextTheme.ERROR} align={ETextAlign.CENTER} />
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(styles.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails articleId={id} />
        <Text title={t('Комментарии')} className={styles.commentTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentsList
          isLoading={commentIsLoading}
          comments={comments}
          error={commentError}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default React.memo(ArticleDetailsPage);
