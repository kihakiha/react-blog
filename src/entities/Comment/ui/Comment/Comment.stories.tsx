import React from 'react'

import { Meta, StoryObj } from '@storybook/react';
import avatarImg from '@/shared/assets/tests/storybookAvatar.jpg'

import { Comment } from './Comment';

const meta: Meta<typeof Comment> = {
  title: 'entities/Comment/CommentCard',
  component: Comment,
};

export default meta;
type Story = StoryObj<typeof Comment>;

export const Primary: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Comments text',
      user: { id: '1', username: 'username', avatar: avatarImg }
    },
  },
}

export const Loading: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Comments text',
      user: { id: '1', username: 'username', avatar: avatarImg }
    },
    isLoading: true,
  },
}
