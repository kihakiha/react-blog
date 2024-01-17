import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { ForibiddenPage } from './ForibiddenPage';

const meta: Meta<typeof ForibiddenPage> = {
  title: 'shared/ForibiddenPage',
  component: ForibiddenPage,
};

export default meta;
type Story = StoryObj<typeof ForibiddenPage>;

export const Primary: Story = {
  args: {},
}
