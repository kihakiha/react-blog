import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { EnumTheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widget/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {}
export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]
