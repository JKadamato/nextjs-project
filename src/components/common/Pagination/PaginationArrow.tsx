import Link from 'next/link';

// icons
import { ChevronRightIcon, ChevronLeftIcon } from '@/icons';

// components
import { Button } from '@/components/common/Button';

interface PaginationArrowProps {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}

const PaginationArrow = ({
  href,
  direction,
  isDisabled,
}: PaginationArrowProps) => {
  const baseClass =
    'flex h-8 w-8 items-center justify-center rounded border-none';
  const disabledClass = isDisabled
    ? 'pointer-events-none text-gray-300'
    : 'hover:bg-gray-200';
  const marginClass = direction === 'left' ? 'mr-2' : 'ml-2';

  const className = `${baseClass} ${disabledClass} ${marginClass}`;

  const icon =
    direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />;

  return isDisabled ? (
    <Button customClass={className} aria-disabled="true" variant="outline">
      {icon}
    </Button>
  ) : (
    <Link href={href} className={className}>
      {icon}
    </Link>
  );
};

export default PaginationArrow;
