import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/StoryBook/StoreDecorator';
import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import avatarImage from 'shared/assets/tests/storybookAvatar.jpg'
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: 'StoryBook',
      firstName: 'Story',
      lastName: 'Book',
      age: 1,
      city: 'San Francisco',
      country: ECountry.USA,
      currency: ECurrency.USD,
      avatar: avatarImage,
    }
  },
}

export const WithError: Story = {
  args: {
    error: 'Error'
  },
}

export const Loading: Story = {
  args: {
    isLoading: true
  },
}
