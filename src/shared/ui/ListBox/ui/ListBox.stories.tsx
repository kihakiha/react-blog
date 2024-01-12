import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
};

export default meta;
type Story = StoryObj<typeof ListBox>;

const data = [
  { value: 'Durward Reynolds', content: 'Durward Reynolds' },
  { value: 'Kenton Towne', content: 'Kenton Towne' },
  { value: 'Therese Wunsch', content: 'Therese Wunsch' },
  { value: 'Benedict Kessler', content: 'Benedict Kessler' },
  { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
]

export const Primary: Story = {
  args: {
    items: data,
    value: data[0].value
  },
}

export const Dark: Story = {
  args: {
    items: data,
    value: data[0].value
  },
}
Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]
