import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/libs/classNames/classNames';

import { Input } from '@/shared/ui/Input';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/libs/hook/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormAction, addCommentFormReducer } from '../../model/slices/AddCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';

import styles from './AddCommentForm.module.scss';

export interface IAddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = (props: IAddCommentFormProps) => {
  const {
    className = '',
    onSendComment,
  } = props;

  const { t } = useTranslation();

  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)

  const dispatch = useAppDispatch();

  const onChangeCommentForm = React.useCallback((value: string) => {
    dispatch(addCommentFormAction.setText(value))
  }, [dispatch]);

  const onSendHandler = React.useCallback(() => {
    onSendComment(text || '');
    onChangeCommentForm('');
  }, [onChangeCommentForm, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(styles.addCommentForm, {}, [className])}>
        <Input
          className={styles.input}
          value={text}
          placeholder={`${t('Комментарий')}...`}
          onChange={onChangeCommentForm}
        />
        <Button
          theme={EButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
