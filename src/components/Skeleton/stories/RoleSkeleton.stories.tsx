import type { Meta, StoryObj } from '@storybook/react';

// components
import RoleSkeleton from '@/components/Skeleton/RoleSkeleTon';

const meta = {
  title: 'Components/RoleSkeleton',
  component: RoleSkeleton,
} satisfies Meta<typeof RoleSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
