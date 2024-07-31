import type { Meta, StoryObj } from '@storybook/react';

// components
import SideNav from '@/components/SideNav';

const meta = {
  title: 'Components/SideNav',
  component: SideNav,
} satisfies Meta<typeof SideNav>;

export default meta;

type Story = StoryObj<typeof SideNav>;

export const InputName: Story = {
  args: {},
};
