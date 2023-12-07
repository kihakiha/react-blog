import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { EnumTheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {}
export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]
