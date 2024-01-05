import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { ETextAlign, ETextTheme, Text } from 'shared/ui/Text'
import { CommentsList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import { useInitialEffect } from 'shared/libs/hook/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button } from 'shared/ui/Button';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';
import { Page } from 'shared/ui/Page';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
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

  const navigate = useNavigate();

  const onBackToList = React.useCallback(() => {
    navigate(RoutePaths.articles)
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  })

  if (!id) {
    return (
      <Page className={cn(styles.ArticleDetailsPage, {}, [className])}>
        <Text title={t('Ошибка 404')} text={`${t('Статья не найдена')} :d`} theme={ETextTheme.ERROR} align={ETextAlign.CENTER} />
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={cn(styles.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackToList}>{t('Вернуться к списку')}</Button>
        <ArticleDetails articleId={id} />
        <Text title={t('Комментарии')} className={styles.commentTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentsList
          isLoading={commentIsLoading}
          comments={comments}
          error={commentError}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default React.memo(ArticleDetailsPage);
