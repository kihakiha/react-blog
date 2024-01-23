import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';

const meta: Meta<typeof AdminPanelPage> = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Primary: Story = {
  args: {},
}

Primary.decorators = [StoreDecorator({})]
