import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from '@/app/providers/ThemeProvider';

import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
  args: {
    text:
      '<code className={cn(styles.Code, {}, [className])}> \n'
    + ' {children}\n'
    + '</code>'
  },
}
