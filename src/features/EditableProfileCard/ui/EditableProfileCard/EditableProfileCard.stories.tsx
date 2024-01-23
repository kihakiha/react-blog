import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import avatarImg from '@/shared/assets/tests/storybookAvatar.jpg'
import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';
import { IProfile } from '@/entities/Profile';
import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

const profile: IProfile = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  age: 12,
  avatar: avatarImg,
  city: 'San Francisco',
  username: 'johnuser',
  country: ECountry.USA,
  currency: ECurrency.USD
}

export const Primary: Story = {
  args: {},
}

Primary.decorators = [StoreDecorator({
  profile: {
    data: profile,
    form: profile,
  }
})]

export const Loading: Story = {
  args: {},
}
Loading.decorators = [StoreDecorator({
  profile: {
    isLoading: true,
  }
})]

export const Error: Story = {
  args: {},
}
Error.decorators = [StoreDecorator({
  profile: {
    error: 'error'
  }
})]
