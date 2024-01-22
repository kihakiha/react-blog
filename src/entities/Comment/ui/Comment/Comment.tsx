import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/libs/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text'
import { ETextSize } from '@/shared/ui/Text/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { RoutePaths } from '@/shared/config/RouteConfig/RouteConfig';
import { IComment } from '../../model/types/comment';

import styles from './Comment.module.scss';

interface ICommentProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}
export const Comment = (props: ICommentProps) => {
  const {
    className = '',
    comment,
    isLoading,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={cn(styles.Comment, {}, [className])}>
        <div className={styles.header}>
          <Skeleton border="50%" height={30} width={30} />
          <Skeleton className={styles.username} height={16} width={100} />
        </div>
        <Skeleton className={styles.text} height={50} width="100%" />
      </div>
    )
  }

  return (
    <div className={cn(styles.Comment, {}, [className])}>
      <AppLink to={`${RoutePaths.profile}${comment?.user.id}`} className={styles.header}>
        {comment?.user.avatar ? <Avatar size={30} alt={t('Аватар пользователя')} src={comment?.user.avatar} /> : null}
        <Text className={styles.username} title={comment?.user.username} size={ETextSize.XS} />
      </AppLink>
      <Text className={styles.text} text={comment?.text} />
    </div>
  );
};
