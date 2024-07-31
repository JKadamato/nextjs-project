'use client';
import { useState, useEffect } from 'react';

// components
import Category from '@/components/Category';
import UserRow from '@/components/UserRow';
import Pagination from '@/components/common/Pagination';

// services
import { getTotalUsers, getUserList } from '@/api/user';
import { getRoleById, getRoleList } from '@/api/role';

// models
import { RoleModel } from '@/models/RoleModel';
import { UserModel } from '@/models/UserModel';
import { useSearchParams } from 'next/navigation';

import { DEFAULT_LIMIT } from '@/constants/defaultValue';
import { set } from 'zod';

type UserListProps = {
  page: number;
  limit: number;
  sortBy: string;
  order: string;
  role: string;
};

const UserList = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || DEFAULT_LIMIT;

  const [totalUsers, setTotalUsers] = useState(0);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [roles, setRoles] = useState<RoleModel[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const roleList = await getRoleList();
      if (isMounted) setRoles(roleList);
    })();

    (async () => {
      const totalUsers = await getTotalUsers();
      if (isMounted) setTotalUsers(totalUsers);
    })();

    // cleanup
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    setUsers([]);
    (async () => {
      const userList = (await getUserList(page, limit)) as UserModel[];

      if (isMounted) {
        for await (const user of userList) {
          try {
            const role = await getRoleById(user.userRole);
            user.roleName = role.name;

            setUsers((prev) => [...prev, user]);
          } catch (error) {
            console.error(`Error fetching role for user ${user.id}:`, error);
          }
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [page, limit]);

  const handleSortDateFromLowToHigh = () => {
    const sortedUsers = [...users].sort(
      (a, b) => new Date(a.joined).getTime() - new Date(b.joined).getTime(),
    );
    setUsers(sortedUsers);
  };

  const handleSortDateFromHighToLow = () => {
    const sortedUsers = [...users].sort(
      (a, b) => new Date(b.joined).getTime() - new Date(a.joined).getTime(),
    );
    setUsers(sortedUsers);
  };

  const handleSortFullNameFromLowToHigh = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedUsers);
  };

  const handleSortFullNameFromHighToLow = () => {
    const sortedUsers = [...users].sort((a, b) => b.name.localeCompare(a.name));
    setUsers(sortedUsers);
  };

  const handleFilterRole = (role: string) => {
    if (Number(role) == 3) {
      return setSelectedRole('');
    }
    setSelectedRole(role);
  };

  return (
    <>
      <table className="w-full table-auto">
        <Category
          roles={roles}
          handleSortDateFromLowToHigh={handleSortDateFromLowToHigh}
          handleSortDateFromHighToLow={handleSortDateFromHighToLow}
          handleSortFullNameFromLowToHigh={handleSortFullNameFromLowToHigh}
          handleSortFullNameFromHighToLow={handleSortFullNameFromHighToLow}
          handleFilterRole={handleFilterRole}
        />

        <tbody>
          {!selectedRole ? (
            <>
              {users.map(
                ({ id, avatar, email, name, userRole, joined, roleName }) => (
                  <UserRow
                    user={{
                      id,
                      avatar,
                      email,
                      name,
                      joined,
                      userRole,
                    }}
                    key={id}
                    userRole={roleName || ''}
                  />
                ),
              )}
            </>
          ) : (
            <>
              {users
                .filter(({ roleName }) => roleName === selectedRole)
                .map(
                  ({ id, avatar, email, name, userRole, joined, roleName }) => (
                    <UserRow
                      user={{
                        id,
                        avatar,
                        email,
                        name,
                        joined,
                        userRole,
                      }}
                      key={id}
                      userRole={roleName || ''}
                    />
                  ),
                )}
            </>
          )}
        </tbody>
      </table>

      <Pagination totalUsers={totalUsers} limit={limit} currentPage={page} />
    </>
  );
};

export default UserList;
