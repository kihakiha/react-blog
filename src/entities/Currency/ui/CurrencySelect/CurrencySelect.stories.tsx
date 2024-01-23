import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';
import { ECurrency } from '../../model/types/Currency';

const meta: Meta<typeof CurrencySelect> = {
  title: 'entities/Select',
  component: CurrencySelect,
  decorators: [
    (Story) => <div style={{ padding: 200, maxWidth: 600 }}><Story /></div>
  ]
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Currency_Select: Story = {
  args: {
    value: ECurrency.EUR,
  }
}
