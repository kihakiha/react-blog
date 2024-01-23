import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';
import avatarImg from '@/shared/assets/tests/storybookAvatar.jpg'
import { EUserRoles } from '@/entities/User';

const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Admin: Story = {
  args: {},
}

Admin.decorators = [StoreDecorator({
  user: {
    authData: {
      avatar: avatarImg,
      id: '1',
      roles: [EUserRoles.ADMIN],
      username: 'admin'
    }
  }
})]

export const Simple_User: Story = {
  args: {},
}

Simple_User.decorators = [StoreDecorator({
  user: {
    authData: {
      avatar: avatarImg,
      id: '1',
      roles: [EUserRoles.USER],
      username: 'user'
    }
  }
})]
