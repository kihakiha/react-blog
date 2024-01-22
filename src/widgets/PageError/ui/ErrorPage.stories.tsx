import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { EnumTheme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
  title: 'widget/PageError',
  component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {}
export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]
