import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationList } from './ArticleRecommendationList';

const meta: Meta<typeof ArticleRecommendationList> = {
  title: 'shared/ArticleRecommendationList',
  component: ArticleRecommendationList,
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationList>;

export const Primary: Story = {
  args: {},
}
