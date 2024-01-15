import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../../Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => <div style={{ padding: 200, maxWidth: 600 }}><Story /></div>
  ]
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const items = [
  {
    content: 'first',
  },
  {
    content: 'second',
  },
]

export const Primary: Story = {
  args: {
    triggerBtn: <Button>Open</Button>,
    items
  },
}

export const Direction_Top_Left: Story = {
  args: {
    triggerBtn: <Button>Open</Button>,
    items,
    direction: 'top left'
  },
}
export const Direction_Top_Right: Story = {
  args: {
    triggerBtn: <Button>Open</Button>,
    items,
    direction: 'top right'
  },
}

export const Direction_Bottom_Right: Story = {
  args: {
    triggerBtn: <Button>Open</Button>,
    items,
    direction: 'bottom right'
  },
}

export const Direction_Bottom_Left: Story = {
  args: {
    triggerBtn: <Button>Open</Button>,
    items,
    direction: 'bottom left'
  },
}
