import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../../Button';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'shared/Popups/Popover',
  component: Popover,
  decorators: [
    (Story) => <div style={{ padding: 200, maxWidth: 600 }}><Story /></div>
  ]
};

export default meta;
type Story = StoryObj<typeof Popover>;

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
    children: 'asdasfas'
  },
}
