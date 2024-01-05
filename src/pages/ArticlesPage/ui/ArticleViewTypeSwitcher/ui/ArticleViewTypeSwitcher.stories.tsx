import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { ArticleViewTypeSwitcher } from './ArticleViewTypeSwitcher';

const meta: Meta<typeof ArticleViewTypeSwitcher> = {
  title: 'pages/articlesPage/ArticleViewTypeSwitcher',
  component: ArticleViewTypeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ArticleViewTypeSwitcher>;

export const Primary: Story = {
  args: {},
}
