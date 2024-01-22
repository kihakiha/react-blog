import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/libs/classNames/classNames';
import { CommentsList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { Text } from '@/shared/ui/Text'
import { VStack } from '@/shared/ui/Stack';
import { useAppDispatch } from '@/shared/libs/hook/useAppDispatch';
import { useInitialEffect } from '@/shared/libs/hook/useInitialEffect';
import { fetchCommentsByArticleId } from '../../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsCommentsIsLoading, getArticleDetailsCommentsError } from '../../../model/selectors/comment/comments';
import { addCommentForArticle } from '../../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../../model/slices/ArticleDetailsCommentsSlice';

interface IArticleDetailsCommentsProps {
  className?: string;
  articleId: string;
}
export const ArticleDetailsComments = (props: IArticleDetailsCommentsProps) => {
  const {
    className = '',
    articleId
  } = props

  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentIsLoading = useSelector(getArticleDetailsCommentsIsLoading)
  const commentError = useSelector(getArticleDetailsCommentsError)

  const onSendComment = React.useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
  })

  return (
    <div className={cn('', {}, [className])}>
      <Text
        title={t('Комментарии')}
      />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentsList
        isLoading={commentIsLoading}
        comments={comments}
        error={commentError}
      />
    </div>
  );
};
