import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { EnumTheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
  title: 'widget/PageLoader',
  component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {}
export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]
