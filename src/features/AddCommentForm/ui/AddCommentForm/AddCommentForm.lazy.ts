import React from 'react';
import { IAddCommentFormProps } from './AddCommentForm';

export const AddCommentFormLazy = React.lazy<React.FC<IAddCommentFormProps>>(async () => import('./AddCommentForm'));
