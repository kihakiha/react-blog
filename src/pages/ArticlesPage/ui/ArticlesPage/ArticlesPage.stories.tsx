import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/articlesPage/ArticlesPage',
  component: ArticlesPage,
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {
  args: {},
}
