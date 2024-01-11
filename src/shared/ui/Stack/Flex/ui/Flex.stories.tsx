import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/Stack/Flex',
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

const layout = (
  <>
    <div>first</div>
    <div>second</div>
    <div>therd</div>
    <div>fourth</div>
  </>
)

export const Row: Story = {
  args: {
    direction: 'row',
    children: layout,
    gap: 30
  },
}

export const Column: Story = {
  args: {
    direction: 'column',
    children: layout
  },
}
