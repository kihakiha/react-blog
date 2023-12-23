import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

import avatarImg from '../../../assets/tests/storybookAvatar.jpg'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: avatarImg
  },
}

export const Small: Story = {
  args: {
    size: 80,
    src: avatarImg
  },
}
