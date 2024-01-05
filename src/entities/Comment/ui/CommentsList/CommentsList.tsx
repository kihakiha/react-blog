import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text'
import { IComment } from '../../model/types/comment';
import { Comment } from '../Comment/Comment'

import styles from './CommentsList.module.scss';

interface ICommentsListProps {
  className?: string;
  comments?: IComment[]
  isLoading?: boolean;
  error?: string;
}
export const CommentsList = (props: ICommentsListProps) => {
  const {
    className = '',
    comments,
    isLoading,
    error
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={cn(styles.CommentsList, {}, [className])}>
        <Comment isLoading className={styles.comment} />
        <Comment isLoading className={styles.comment} />
        <Comment isLoading className={styles.comment} />
      </div>
    )
  }

  return (
    <div className={cn(styles.CommentsList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => <Comment key={comment.id} isLoading={isLoading} className={styles.comment} comment={comment} />)
        : <Text title={t('Комментарии отсутствуют')} />}
    </div>
  );
};
