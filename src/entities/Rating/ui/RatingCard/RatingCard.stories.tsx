import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof RatingCard> = {
  title: 'entities/Rating',
  component: RatingCard,
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Primary: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
}

Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]
