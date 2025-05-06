import type { Meta, StoryObj } from '@storybook/react';

import { WeavAccordion } from './Accordion';

const meta = {
  component: WeavAccordion,
} satisfies Meta<typeof WeavAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};