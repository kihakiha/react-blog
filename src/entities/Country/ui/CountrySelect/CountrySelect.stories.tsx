import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/Select',
  component: CountrySelect,
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Country_Select: Story = {}
