import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';

const meta: Meta<typeof ArticleEditPage> = {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {
  args: {},
}

Primary.decorators = [StoreDecorator({})]
