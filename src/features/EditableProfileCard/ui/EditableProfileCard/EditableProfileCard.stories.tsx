import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'shared/EditableProfileCard',
  component: EditableProfileCard,
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
  args: {},
}
