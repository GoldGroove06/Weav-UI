import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Toggle me',
  },
};

export const WithCustomText: Story = {
  args: {
    children: 'Custom Toggle Text',
  },
}; 