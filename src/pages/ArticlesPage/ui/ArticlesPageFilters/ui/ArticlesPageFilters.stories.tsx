import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
  title: 'pages/articlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Primary: Story = {
  args: {},
}
