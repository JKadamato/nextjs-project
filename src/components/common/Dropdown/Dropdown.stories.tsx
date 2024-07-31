import type { Meta, StoryObj } from '@storybook/react';

// components
import Dropdown from '@/components/common/Dropdown';

// mocks
import { roleOptions } from '@/mocks';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dropdown Options',
    options: roleOptions,
    value: 'default',
  },
};
