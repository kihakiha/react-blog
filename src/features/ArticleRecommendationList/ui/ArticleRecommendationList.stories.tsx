import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationList } from './ArticleRecommendationList';
import { StoreDecorator } from '@/shared/config/StoryBook/StoreDecorator';

const meta: Meta<typeof ArticleRecommendationList> = {
  title: 'features/ArticleDetails/ArticleRecommendationList',
  component: ArticleRecommendationList,
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationList>;

export const Primary: Story = {
  args: {},
}

Primary.decorators = [StoreDecorator({
})]
