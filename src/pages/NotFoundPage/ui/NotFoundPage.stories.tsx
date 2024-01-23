import React from 'react'

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from '@/app/providers/ThemeProvider';

import { NotFoundPage } from './NotFoundPage';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const NotFoundPageLight: Story = {}
NotFoundPageLight.decorators = [StoreDecorator({})]

export const NotFoundPageDark: Story = {}
NotFoundPageDark.decorators = [
  ThemeDecorator(EnumTheme.DARK),
  StoreDecorator({}),
]
