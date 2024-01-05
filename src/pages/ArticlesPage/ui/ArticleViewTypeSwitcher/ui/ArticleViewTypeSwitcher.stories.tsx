import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryObj } from '@storybook/react';

import { ArticleViewTypeSwitcher } from './ArticleViewTypeSwitcher';

const meta: Meta<typeof ArticleViewTypeSwitcher> = {
  title: 'shared/ArticleViewTypeSwitcher',
  component: ArticleViewTypeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ArticleViewTypeSwitcher>;

export const Primary: Story = {
  args: {},
}
