import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import { Button, EButtonTheme } from 'shared/ui/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/UpdateProfileData/updateProfileData';
import { profileAction } from '../../model/slice/ProfileSlice';

interface IEditableProfileCardHeaderProps {
  className?: string;
}
export const EditableProfileCardHeader = (props: IEditableProfileCardHeaderProps) => {
  const {
    className
  } = props
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
    <HStack max justify="between" className={cn('', {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <>
          {readonly
            ? (
              <Button
                theme={EButtonTheme.CLEAR}
                onClick={onEdit}
              >
                {t('Редактировать')}
              </Button>
            ) : (
              <HStack gap={10} justify="end">
                <Button
                  theme={EButtonTheme.OUTLINE}
                  onClick={onConfirmSave}
                >
                  {t('Подтвердить')}
                </Button>
                <Button
                  theme={EButtonTheme.CLEAR}
                  onClick={onCancelEdit}
                >
                  {t('Отменить')}
                </Button>
              </HStack>
            )}
        </>
      )}
    </HStack>
  )
};
