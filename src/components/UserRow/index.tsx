'use client';
import Image from 'next/image';
import { useState } from 'react';

// models
import { UserModel } from '@/models/UserModel';
import TripleDotActions from '@/components/TripleDotAction';

// api
import { deleteUserApi } from '@/api/user';

// components

type UserRowProps = {
  user: UserModel;
  userRole: string;
};

const UserRow = ({ user, userRole }: UserRowProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleOnBlur = () => setDropdownOpen(false);

  const { id, name, email, avatar, joined } = user;

  // TODO: handle error later
  const handleOnDelete = async (id: string) => {
    const result = await deleteUserApi(id);

    if (result?.message) {
      console.error('Failed to delete user:', result.message);
    } else {
      console.log('User deleted successfully');
    }
  };

  return (
    <tr className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-10 pr-8 md:pr-0 justify-between p-0 sm:p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200 ease-in-out">
      <td className="flex items-center w-full mb-4 sm:mb-0">
        <Image
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-lg mr-4"
          width={40}
          height={40}
        />
        <div className="text-sm font-medium sm:truncate max-w-24 xl:max-w-64 md:max-w-25">
          {email}
        </div>
      </td>
      <td className="text-sm w-full truncate mb-4 sm:mb-0">{name}</td>
      <td className="text-sm w-full truncate mb-4 sm:mb-0">{userRole}</td>
      <td className="text-sm w-full truncate mb-4 sm:mb-0">
        {new Date(joined).toLocaleDateString()}
      </td>
      <td className="w-full sm:w-1/12">
        <TripleDotActions
          link={`/users/${id}/edit`}
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          onBlur={handleOnBlur}
          onDelete={() => handleOnDelete(id)}
        />
      </td>
    </tr>
  );
};

export default UserRow;
