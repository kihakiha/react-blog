import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';

const meta: Meta<typeof NotificationList> = {
  title: 'entities/Notification/List',
  component: NotificationList,
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
  args: {},
}

Primary.decorators = [StoreDecorator({

})]
