import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { AppLink, EAppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: EAppLinkTheme.PRIMARY
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: EAppLinkTheme.SECONDARY
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Primary',
    theme: EAppLinkTheme.PRIMARY
  },
}
PrimaryDark.decorators = [ThemeDecorator(EnumTheme.DARK)]

export const SecondaryDark: Story = {
  args: {
    children: 'Secondary',
    theme: EAppLinkTheme.SECONDARY
  },
};
SecondaryDark.decorators = [ThemeDecorator(EnumTheme.DARK)]
