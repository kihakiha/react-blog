import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';

const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleDetails/ArticleRating',
  component: ArticleRating,
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
  args: {
    articleId: '1'
  },
}

Primary.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'admin'
      }
    }
  }),
]
