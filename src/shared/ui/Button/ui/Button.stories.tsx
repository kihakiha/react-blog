import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from '@/app/providers/ThemeProvider';

import { Button, EButtonSize, EButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary_M: Story = {
  args: {
    children: 'Primary',
    size: EButtonSize.M
  },
}

export const Primary_L: Story = {
  args: {
    children: 'Primary',
    size: EButtonSize.L
  },
}

export const Primary_XL: Story = {
  args: {
    children: 'Primary',
    size: EButtonSize.XL
  },
}

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: EButtonTheme.CLEAR
  },
};

export const Clear_Inverted: Story = {
  args: {
    children: 'Clear Inverted',
    theme: EButtonTheme.CLEAR_INVERTED
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

export const BackgroundTheme: Story = {
  args: {
    children: 'backgorund',
    theme: EButtonTheme.BACKGROUND
  },
}

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'backgorundInverted',
    theme: EButtonTheme.BACKGROUND_INVERTED
  },
}

export const Square_M: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: EButtonSize.M
  },
}

export const Square_L: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: EButtonSize.L
  },
}

export const Square_XL: Story = {
  args: {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: EButtonSize.XL
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    theme: EButtonTheme.CLEAR,
    disabled: true
  },
}
