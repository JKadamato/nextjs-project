import type { Meta, StoryObj } from '@storybook/react';

// components
import { Input } from '@/components/common/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const InputName: Story = {
  args: {
    label: 'Name',
    name: 'userName',
    type: 'text',
  },
};

export const InputWithPlaceholder: Story = {
  args: {
    ...InputName.args,
    placeholder: 'Enter your name',
  },
};

export const InputWithTypeEmail: Story = {
  args: {
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};
