import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';
import { Button } from '../../Button';
import { Popover } from '../../Popups';

const meta: Meta<typeof Drawer> = {
  title: 'shared/Drawer',
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  args: {
    children: (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    ),
    isOpen: true,
  },

}
