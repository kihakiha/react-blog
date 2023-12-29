import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { Text } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next';
import {
  getProfileData, getProfileReadonly, profileAction, updateProfileData
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import { Button, EButtonTheme } from 'shared/ui/Button';
import { getUserAuthData } from 'entities/User';
import styles from './ProfilePageHeader.module.scss';

interface IProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = ({ className = '' }: IProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')

  const readonly = useSelector(getProfileReadonly)

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData)

  const canEdit = authData?.id === profileData?.id

  const onEdit = React.useCallback(() => {
    dispatch(profileAction.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = React.useCallback(() => {
    dispatch(profileAction.cancelEdit())
  }, [dispatch])

  const onConfirmSave = React.useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={styles.ProfilePageHeader}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div>
          {readonly
            ? (
              <Button
                theme={EButtonTheme.CLEAR}
                onClick={onEdit}
              >
                {t('Редактировать')}
              </Button>
            ) : (
              <div>
                <Button
                  theme={EButtonTheme.OUTLINE}
                  onClick={onConfirmSave}
                  className={styles.saveBtn}
                >
                  {t('Подтвердить')}
                </Button>
                <Button
                  theme={EButtonTheme.CLEAR}
                  onClick={onCancelEdit}
                >
                  {t('Отменить')}
                </Button>
              </div>
            )}
        </div>
      )}
    </div>
  )
};
