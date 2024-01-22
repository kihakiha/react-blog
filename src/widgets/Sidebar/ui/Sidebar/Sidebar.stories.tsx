import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { EnumTheme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {}
Light.decorators = [StoreDecorator({
  user: { authData: { id: '1', username: 'storybook' } }
})]

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(EnumTheme.DARK), StoreDecorator({
  user: { authData: { id: '1', username: 'storybook' } }
})]

export const NoAuth: Story = {}
NoAuth.decorators = [StoreDecorator({
  user: {}
})]
