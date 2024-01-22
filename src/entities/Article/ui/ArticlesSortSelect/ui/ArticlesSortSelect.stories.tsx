import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from '@/app/providers/ThemeProvider';

import { ArticlesSortSelect } from './ArticlesSortSelect';

const meta: Meta<typeof ArticlesSortSelect> = {
  title: 'entities/Article/ArticlesSortSelect',
  component: ArticlesSortSelect,
};

export default meta;
type Story = StoryObj<typeof ArticlesSortSelect>;

export const Primary: Story = {
  args: {},
}
