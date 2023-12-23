import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/StoryBook/StoreDecorator';
import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import avatarImage from 'shared/assets/tests/storybookAvatar.jpg'
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const ProfilePageLight: Story = {}
ProfilePageLight.decorators = [ThemeDecorator(EnumTheme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'StoryBook',
      firstName: 'Story',
      lastName: 'Book',
      age: 1,
      city: 'San Francisco',
      country: ECountry.USA,
      currency: ECurrency.USD,
      avatar: avatarImage,
    }
  }
})]
