import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [
    (Story) => <div style={{ padding: 200, maxWidth: 400 }}><Story /></div>
  ]
};

export default meta;
type Story = StoryObj<typeof ListBox>;

const data = [
  { value: 'Durward Reynolds', content: 'Durward Reynolds' },
  { value: 'Kenton Towne', content: 'Kenton Towne' },
  { value: 'Therese Wunsch', content: 'Therese Wunsch' },
  { value: 'Benedict Kessler', content: 'Benedict Kessler' },
  { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
]

export const Primary: Story = {
  args: {
    items: data,
    value: '123'
  },
}

export const Direction_Top_Left: Story = {
  args: {
    items: data,
    value: '123',
    direction: 'top left'
  },
}
export const Direction_Top_Right: Story = {
  args: {
    items: data,
    value: '123',
    direction: 'top right'
  },
}

export const Direction_Bottom_Right: Story = {
  args: {
    items: data,
    value: '123',
    direction: 'bottom right'
  },
}

export const Direction_Bottom_Left: Story = {
  args: {
    items: data,
    value: '123',
    direction: 'bottom left'
  },
}
