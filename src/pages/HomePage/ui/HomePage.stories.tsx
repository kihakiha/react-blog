import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from '@/app/providers/ThemeProvider';

import HomePage from './HomePage';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';

const meta: Meta<typeof HomePage> = {
  title: 'pages/HomePage',
  component: HomePage,
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const HomePageLight: Story = {}
HomePageLight.decorators = [StoreDecorator({})]

export const HomePageDark: Story = {}
HomePageDark.decorators = [
  ThemeDecorator(EnumTheme.DARK),
  StoreDecorator({})
]
