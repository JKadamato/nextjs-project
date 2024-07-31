// components
import { Button } from '@/components/common/Button';

// icons
import { TripleDot } from '@/icons/TripleDot';

// api
import { getRoleList } from '@/api/role';

type RoleList = {
  showError?: boolean;
};

const RoleList = async () => {
  const roles = await getRoleList();

  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Description</th>
          <th className="py-2 px-4 border-b" />
        </tr>
      </thead>
      <tbody>
        {roles.map(({ id, name, description }, index) => (
          <tr key={id} className="text-center hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{index + 1}</td>
            <td className="py-2 px-4 border-b">{name}</td>
            <td className="py-2 px-4 border-b">{description}</td>
            <td className="py-2 px-4 border-b">
              <Button
                customClass="text-gray-500 outline-none border-none"
                variant="outline"
                data-testid="triple-dot"
              >
                <TripleDot />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleList;
