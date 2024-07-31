import type { Meta, StoryObj } from '@storybook/react';

// components
import RoleForm from '@/components/RoleForm';

const meta = {
  title: 'Components/RoleForm',
  component: RoleForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RoleForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
