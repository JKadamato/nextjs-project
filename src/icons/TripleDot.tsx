import { CustomClassType } from '@/types/components';

export const TripleDot = ({ customClass = 'w-6 h-6' }: CustomClassType) => (
  <svg
    className={customClass}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M5 12h.01M12 12h.01M19 12h.01"
    />
  </svg>
);
