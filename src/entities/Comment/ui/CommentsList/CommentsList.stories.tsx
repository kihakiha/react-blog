import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import avatarImg from 'shared/assets/tests/storybookAvatar.jpg'
import { CommentsList } from './CommentsList';

const meta: Meta<typeof CommentsList> = {
  title: 'entities/Comment/CommentsList',
  component: CommentsList,
};

export default meta;
type Story = StoryObj<typeof CommentsList>;

export const Primary: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Comments text',
        user: { id: '1', username: 'username', avatar: avatarImg }
      },
      {
        id: '2',
        text: 'Comments text',
        user: { id: '1', username: 'username', avatar: avatarImg }
      },
      {
        id: '3',
        text: 'Comments text',
        user: { id: '1', username: 'username', avatar: avatarImg }
      }
    ]
  },
}

export const Loading: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Comments text',
        user: { id: '1', username: 'username', avatar: avatarImg }
      },
      {
        id: '2',
        text: 'Comments text',
        user: { id: '1', username: 'username', avatar: avatarImg }
      },
      {
        id: '3',
        text: 'Comments text',
        user: { id: '1', username: 'username', avatar: avatarImg }
      }
    ],
    isLoading: true,
  },
}
