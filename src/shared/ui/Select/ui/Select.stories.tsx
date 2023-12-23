import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

import avataImg from './storybookSelect.jpg'

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Select',
    options: [{ value: '1', content: '1' }, { value: '2', content: '2' }, { value: '3', content: '3' }, { value: '4', content: '4' }]
  },
}
