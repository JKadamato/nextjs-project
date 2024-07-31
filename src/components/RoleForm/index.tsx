'use client';
import { useState } from 'react';

// models

// components
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';

// models
import { RoleModel } from '@/models/RoleModel';

export interface RoleFormProps {
  role?: RoleModel;
}

const RoleForm = ({ role }: RoleFormProps) => {
  const [title] = useState(role?.name || 'Admin');
  const [description] = useState(
    role?.description || 'Admin is the super user',
  );

  const handleOnchange = () => {
    // TODO: handle onchange later
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Role</h2>
      <p className="text-sm text-gray-600 mb-4">
        Everyone who works on your {title} can have different roles
        <a href="#" className="text-blue-500 ml-1">
          learn more
        </a>
      </p>
      <div className="mb-4">
        <Input
          type="role"
          name="title"
          label="Type name"
          onChange={handleOnchange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          rows={4}
          defaultValue={description}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button customClass="px-4 py-2 border rounded-md" variant="outline">
          Cancel
        </Button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Create role
        </button>
      </div>
    </form>
  );
};

export default RoleForm;
