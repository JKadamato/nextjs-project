import { Metadata } from 'next';
import { Suspense } from 'react';

// components
import { Button } from '@/components/common/Button';

// ui
import RoleList from '@/ui/role/RoleList';

// components
import RoleSkeleton from '@/components/Skeleton/RoleSkeleTon';

export const metadata: Metadata = {
  title: 'Role Listing',
};

const RolePage = () => {
  return (
    <div className="relative shadow-lg sm:rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-8 bg-gray-500">
        Roles
      </h1>
      <Suspense fallback={<RoleSkeleton />}>
        <RoleList />
      </Suspense>
      <div className="flex justify-end mt-4">
        <Button variant="primary" type="button" ariaLabel="Add New Role">
          Add New Role
        </Button>
      </div>
    </div>
  );
};

export default RolePage;
