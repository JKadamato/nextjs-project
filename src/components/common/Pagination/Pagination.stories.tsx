import type { Meta, StoryObj } from '@storybook/react';

// components
import Pagination from '@/components/common/Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalUsers: 10,
    limit: 5,
    currentPage: 1,
  },
};
