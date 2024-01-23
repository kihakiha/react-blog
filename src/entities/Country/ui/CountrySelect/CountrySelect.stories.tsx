import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';
import { ECountry } from '../../model/types/counrty';

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/Select',
  component: CountrySelect,
  decorators: [
    (Story) => <div style={{ padding: 200, maxWidth: 600 }}><Story /></div>
  ]
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Country_Select: Story = {
  args: {
    value: ECountry.RUSSIA,
  }
}
