import type { Meta, StoryObj } from '@storybook/react';

// components
import UserRow from '@/components/UserRow';

const meta = {
  title: 'Components/UserInfo',
  component: UserRow,
} satisfies Meta<typeof UserRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      id: '1',
      avatar: 'https://s.net.vn/Ur2Q',
      email: 'test@example.com',
      name: 'John Doe',
      userRole: '1',
      joined: new Date('2022-01-01'),
    },
    userRole: '1',
  },
};
