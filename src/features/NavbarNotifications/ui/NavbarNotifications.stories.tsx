import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { NavbarNotifications } from './NavbarNotifications';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';

const meta: Meta<typeof NavbarNotifications> = {
  title: 'features/NavbarNotifications',
  component: NavbarNotifications,
};

export default meta;
type Story = StoryObj<typeof NavbarNotifications>;

export const Primary: Story = {
  args: {
  },
}

Primary.decorators = [StoreDecorator({

})]
