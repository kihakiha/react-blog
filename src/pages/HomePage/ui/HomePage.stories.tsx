import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryObj } from '@storybook/react';
import HomePage from './HomePage';

const meta: Meta<typeof HomePage> = {
  title: 'pages/HomePage',
  component: HomePage,
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const HomePageLight: Story = {}

export const HomePageDark: Story = {}
HomePageDark.decorators = [ThemeDecorator(EnumTheme.DARK)]
