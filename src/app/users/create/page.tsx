import { Metadata } from 'next';

// components
import UserForm from '@/components/UserForm';

// types
import { SelectType } from '@/types/SelectType';

// apis
import { getUsers } from '@/api/user';
import { getRoleList } from '@/api/role';

// models
import { UserModel } from '@/models/UserModel';
import { RoleModel } from '@/models/RoleModel';

export const metadata: Metadata = {
  title: 'Create User',
};

const CreateUserPage = async () => {
  const users: UserModel[] = await getUsers();

  if (users.length === 0) {
    throw new Error('No users found');
  }

  const totalRoles: RoleModel[] = await getRoleList();
  const roleOptions: SelectType[] = totalRoles.map((role) => ({
    id: role.id.toString(),
    label: role.name,
  }));

  return (
    <div className="p-4">
      <UserForm roleOptions={roleOptions} />
    </div>
  );
};

export default CreateUserPage;
