import { render } from '@testing-library/react';

// component
import UserForm from '@/components/UserForm';

// mocks
import { roleOptions } from '@/mocks';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormState: () => [{}, () => {}],
  useFormStatus: () => ({ pending: false }),
}));

describe('UserForm', () => {
  const user = {
    name: 'name 1',
    avatar: 'https://s.net.vn/Ur2Q',
    userRole: '78e731027d8fd50ed642340b7c9a63b3',
    joined: new Date('2022-01-01'),
    email: 'email 1',
    id: 'c4ca4238a0b923820dcc509a6f75849b',
  };

  const roleName = 'Admin';

  it('renders UserForm correctly', () => {
    const { asFragment } = render(
      <UserForm
        user={user}
        roleName={roleName}
        roleOptions={roleOptions}
        selectedRole={roleName}
        id={user.id}
        userRoleId={user.userRole}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
