"use client"
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import React from 'react';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default= () => {
  return (
    <Card>
      <div className="p-4">
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="mt-2">This is a default card.</p>
      </div>
    </Card>
  );
}

