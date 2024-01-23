import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import ForibiddenPage from './ForibiddenPage';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';

const meta: Meta<typeof ForibiddenPage> = {
  title: 'pages/ForibiddenPage',
  component: ForibiddenPage,
};

export default meta;
type Story = StoryObj<typeof ForibiddenPage>;

export const Primary: Story = {
  args: {},
}
Primary.decorators = [StoreDecorator({})]
