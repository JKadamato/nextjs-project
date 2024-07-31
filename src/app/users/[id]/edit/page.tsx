import { Metadata } from 'next';

// apis
import { getRoleById, getRoleList } from '@/api/role';
import { getUserById } from '@/api/user';

// models
import { RoleModel } from '@/models/RoleModel';
import { UserModel } from '@/models/UserModel';

// components
import UserForm from '@/components/UserForm';

// types
import { SelectType } from '@/types/SelectType';

interface PageProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const userName = await getUserById(params.id);

  return {
    title: userName.name,
  };
};

const UserDetailPage = async ({ params }: PageProps) => {
  const { id } = params;

  try {
    const user: UserModel = await getUserById(id);
    const role: RoleModel = await getRoleById(user.userRole);
    const totalRoles: RoleModel[] = await getRoleList();
    const roleName: string = role.name;
    const roleOptions: SelectType[] = totalRoles.map((role) => ({
      id: role.id.toString(),
      label: role.name,
    }));

    return (
      <div className="p-4">
        <UserForm
          id={id}
          user={user}
          roleName={roleName}
          roleOptions={roleOptions}
          selectedRole={roleName}
          userRoleId={role.id.toString()}
        />
      </div>
    );
  } catch (error) {
    return null;
  }
};

export default UserDetailPage;
