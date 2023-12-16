import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {
    placeholder: 'Light',
    autofocus: true
  },
}

export const Dark: Story = {
  args: {
    placeholder: 'Dark',
    autofocus: true
  },
}
Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]
