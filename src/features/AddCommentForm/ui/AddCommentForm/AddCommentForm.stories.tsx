import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/StoryBook/StoreDecorator';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
  args: {
    onSendComment: () => {},
  },
}

Primary.decorators = [StoreDecorator({
  addCommentForm: {
    text: '123'
  }
})]
