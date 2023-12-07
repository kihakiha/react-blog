import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Button, EButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary'
  },
}

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: EButtonTheme.CLEAR
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: EButtonTheme.OUTLINE
  },
}

export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    theme: EButtonTheme.OUTLINE
  },
}
OutlineDark.decorators = [ThemeDecorator(EnumTheme.DARK)]
