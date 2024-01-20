import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/Notification/Item',
  component: NotificationItem,
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
  args: {
    item: {
      id: '1',
      title: 'Notification',
      description: 'Notification description',
      userId: '2'
    }
  },
}
export const Link: Story = {
  args: {
    item: {
      id: '1',
      title: 'Notification with link',
      description: 'Notification description',
      userId: '2',
      href: '/'
    }
  },
}
