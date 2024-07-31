import type { Meta, StoryObj } from '@storybook/react';

// components
import UserSkeleton from '@/components/Skeleton/UserSkeleton';

const meta = {
  title: 'Components/UserSkeleton',
  component: UserSkeleton,
} satisfies Meta<typeof UserSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
