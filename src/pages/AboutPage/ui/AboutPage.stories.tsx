import React from 'react'

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from '@/app/providers/ThemeProvider';

import AboutPage from './AboutPage';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const AboutPageLight: Story = {}
AboutPageLight.decorators = [StoreDecorator({})]

export const AboutPageDark: Story = {}
AboutPageDark.decorators = [
  ThemeDecorator(EnumTheme.DARK),
  StoreDecorator({})
]
