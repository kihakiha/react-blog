import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Modal_Component: Story = {
  args: {
    children: 'Modal',
    isOpen: true,
  },
}

export const Modal_Component_Dark: Story = {
  args: {
    children: 'Modal',
    isOpen: true,
  },
}
Modal_Component_Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]
