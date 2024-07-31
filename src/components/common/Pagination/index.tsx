'use client';
import { usePathname, useSearchParams } from 'next/navigation';

// components
import PaginationArrow from '@/components/common/Pagination/PaginationArrow';

// constants
import { DEFAULT_LIMIT } from '@/constants/defaultValue';

interface PaginationProps {
  totalUsers: number;
  limit: number;
  currentPage: number;
}

export default function Pagination({
  totalUsers,
  limit,
  currentPage,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, totalUsers);
  const totalPages = Math.ceil(totalUsers / limit);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    params.set('limit', limit.toString());
    return `${pathname}?${params.toString()}`;
  };

  const itemsPerPage = DEFAULT_LIMIT;

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm">
        Displaying <strong>{itemsPerPage}</strong> out of {totalPages}
      </div>

      <div className="flex items-center">
        <div className="flex items-center mx-2">
          <span className="text-sm font-medium">{startItem}</span>
          <span className="mx-1">-</span>
          <span className="text-sm font-medium">{endItem}</span>
        </div>
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </div>
  );
}
