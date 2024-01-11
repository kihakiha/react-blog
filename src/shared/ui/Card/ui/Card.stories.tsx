import React from 'react'
import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../Text'

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <Text title="Card Title" text="Some text" />
  },
}
