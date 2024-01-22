import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from '@/app/providers/ThemeProvider';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: 'shared/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Primary: Story = {
  args: {},
}
