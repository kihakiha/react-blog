import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from '@/app/providers/ThemeProvider';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {
    width: '100%',
    height: 300,
  },
}

export const Primary_Rounded: Story = {
  args: {
    border: '50%',
    width: 150,
    height: 150,
  },
}

export const Dark: Story = {
  args: {
    width: '100%',
    height: 300,
  },
}
Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]

export const Dark_Rounded: Story = {
  args: {
    border: '50%',
    width: 150,
    height: 150,
  },
}
Dark_Rounded.decorators = [ThemeDecorator(EnumTheme.DARK)]
