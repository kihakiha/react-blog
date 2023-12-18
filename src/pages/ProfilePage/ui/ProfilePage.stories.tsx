import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/StoryBook/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const ProfilePageLight: Story = {}
ProfilePageLight.decorators = [ThemeDecorator(EnumTheme.DARK), StoreDecorator({})]

export const ProfilePageDark: Story = {}
ProfilePageDark.decorators = [ThemeDecorator(EnumTheme.DARK), StoreDecorator({})]
