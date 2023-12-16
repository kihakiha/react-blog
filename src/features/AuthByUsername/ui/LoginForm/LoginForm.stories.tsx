import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/StoryBook/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
}
Primary.decorators = [StoreDecorator({
  loginForm: {
    username: '123', password: '123', isLoading: false
  }
})]

export const WithError: Story = {
  args: {},
}
WithError.decorators = [StoreDecorator({
  loginForm: {
    username: '123', password: '123', isLoading: false, error: 'ERROR'
  }
})]

export const Loading: Story = {
  args: {},
}
Loading.decorators = [StoreDecorator({
  loginForm: {
    username: '123', password: '123', isLoading: true
  }
})]
