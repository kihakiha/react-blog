import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryObj } from '@storybook/react';

import { ArticleEditPage } from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
  title: 'shared/ArticleEditPage',
  component: ArticleEditPage,
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {
  args: {},
}
