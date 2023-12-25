import React from 'react'

import { ThemeDecorator } from 'shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

import { Meta, StoryObj } from '@storybook/react';

import { ETextSize, ETextTheme, Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Title_And_Text: Story = {
  args: {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas, iste illo dolor eligendi ab.'
  },
}

export const Only_Title: Story = {
  args: {
    title: 'Lorem Ipsum',
  },
}

export const Only_Text: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas, iste illo dolor eligendi ab.'
  },
}

export const Title_And_Text_Dark: Story = {
  args: {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas, iste illo dolor eligendi ab.'
  },
}
Title_And_Text_Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]

export const Only_Title_Dark: Story = {
  args: {
    title: 'Lorem Ipsum',
  },
}
Only_Title_Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]

export const Only_Text_Dark: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas, iste illo dolor eligendi ab.'
  },
}
Only_Text_Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]

export const Text_Error: Story = {
  args: {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas, iste illo dolor eligendi ab.',
    theme: ETextTheme.ERROR
  },
}

export const Text_Error_Dark: Story = {
  args: {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas, iste illo dolor eligendi ab.',
    theme: ETextTheme.ERROR
  },
}
Text_Error_Dark.decorators = [ThemeDecorator(EnumTheme.DARK)]

export const Size_XS: Story = {
  args: {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas, iste illo dolor eligendi ab.',
    theme: ETextTheme.ERROR,
    size: ETextSize.XS
  },
}

export const Size_M: Story = {
  args: {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas, iste illo dolor eligendi ab.',
    theme: ETextTheme.ERROR,
    size: ETextSize.M
  },
}

export const Size_L: Story = {
  args: {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas, iste illo dolor eligendi ab.',
    theme: ETextTheme.ERROR,
    size: ETextSize.L
  },
}
