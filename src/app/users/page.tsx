'use client';
import { Suspense } from 'react';
// import { Metadata } from 'next';
import Link from 'next/link';

// components
import UserList from '@/ui/user/UserList';

// constants
import { DEFAULT_LIMIT } from '@/constants/defaultValue';

// components
import UserSkeleton from '@/components/Skeleton/UserSkeleton';
import { Button } from '@/components/common/Button';

// icons
import { PlusIcon } from '@/icons/PlusIcon';

// export const metadata: Metadata = {
//   title: 'User Listing',
// };

type UserPageProps = {
  searchParams: {
    page: number;
    limit: number;
    sortBy: string; // Added for sorting
    order: string; // Added for ordering
    role: string;
  };
};

const UserPage = ({ searchParams }: UserPageProps) => {
 
  return (
    <main>
      <Suspense fallback={<UserSkeleton />}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex-grow" />
          <Link href="/users/create">
            <Button
              variant="primary"
              type="button"
              ariaLabel="Add New User"
              customClass="ml-4 rounded-2xl"
              startIcon={<PlusIcon />}
            >
              Add New User
            </Button>
          </Link>
        </div>
        <div>
          <UserList
      
          />
        </div>
      </Suspense>
    </main>
  );
};

export default UserPage;
