import type { Meta, StoryObj } from '@storybook/react';

// components
import UserForm from '@/components/UserForm';

// mocks
import { roleOptions } from '@/mocks';

const meta = {
  title: 'Components/UserForm',
  component: UserForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'c4ca4238a0b923820dcc509a6f75849b',
    user: {
      name: 'name 1',
      avatar: 'https://s.net.vn/Ur2Q',
      userRole: '78e731027d8fd50ed642340b7c9a63b3',
      joined: new Date('2022-01-01'),
      email: 'email 1',
      id: 'c4ca4238a0b923820dcc509a6f75849b',
    },
    roleName: 'Admin',
    roleOptions: roleOptions,
    selectedRole: 'Admin',
    userRoleId: '78e731027d8fd50ed642340b7c9a63b3',
  },
};
