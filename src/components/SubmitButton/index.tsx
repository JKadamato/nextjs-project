'use client';
import { useFormStatus } from 'react-dom';

// components
import { Button } from '@/components/common/Button';

interface IProps {
  label: string;
  disabled?: boolean;
}

export const SubmitButton = ({ label, disabled }: IProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      customClass="px-4 py-2 bg-blue-500 text-white rounded-md"
      type="submit"
      disabled={pending || disabled}
    >
      {label}
    </Button>
  );
};
