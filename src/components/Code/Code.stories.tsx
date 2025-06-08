import type { Meta, StoryObj } from '@storybook/react';
import Code from './Code';

const meta = {
  title: 'Components/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'const greeting = "Hello, World!";',
  },
};

export const WithLongCode: Story = {
  args: {
    children: `function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}`,
  },
}; 