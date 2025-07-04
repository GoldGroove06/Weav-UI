import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

export const WithCustomText: Story = {
  args: {
    children: 'Custom Button',
  },
};

export const WithLongText: Story = {
  args: {
    children: 'This is a button with longer text content',
  },
};