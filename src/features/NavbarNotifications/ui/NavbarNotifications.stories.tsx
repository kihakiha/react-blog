import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { NavbarNotifications } from './NavbarNotifications';

const meta: Meta<typeof NavbarNotifications> = {
  title: 'shared/NavbarNotifications',
  component: NavbarNotifications,
};

export default meta;
type Story = StoryObj<typeof NavbarNotifications>;

export const Primary: Story = {
  args: {},
}
