import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';
import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../../model/selectors/article/article';
import styles from './ArticleDetailsPageHeader.module.scss';

interface IArticleDetailsPageHeaderProps {
  className?: string;
}
export const ArticleDetailsPageHeader = ({ className = '' }: IArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article');

  const navigate = useNavigate();

  const article = useSelector(getArticleDetailsData)
  const canEditArticle = useSelector(getCanEditArticle)

  const onBackToList = React.useCallback(() => {
    navigate(RoutePaths.articles)
  }, [navigate]);

  const onEditArticle = React.useCallback(() => {
    navigate(`${RoutePaths.article_details}${article?.id}/edit`)
  }, [article?.id, navigate]);

  return (
    <div className={cn(styles.ArticleDetailsPageHeader, {}, [className])}>
      <Button
        onClick={onBackToList}
      >
        {t('Вернуться к списку')}
      </Button>
      {
        canEditArticle && (
          <Button
            onClick={onEditArticle}
            className={styles.editBtn}
          >
            {t('Редактировать')}
          </Button>
        )
      }

    </div>
  );
};
