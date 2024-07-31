import { render, screen } from '@testing-library/react';

// components
import UserRow from '@/components/UserRow';

// models
import { UserModel } from '@/models/UserModel';

jest.mock('@/api/role', () => ({
  getRoleById: jest.fn().mockResolvedValue({ id: 1, name: 'Admin' }),
}));

describe('UserRow', () => {
  const mockProps: UserModel = {
    avatar: 'https://s.net.vn/Ur2Q',
    email: 'test@example.com',
    name: 'John Doe',
    userRole: '1',
    joined: new Date('2022-01-01'),
    id: '1',
  };

  const userRole = 'Admin';

  it('should render all the content', () => {
    const { asFragment } = render(
      <table>
        <tbody>
          <UserRow user={mockProps} userRole={userRole} />
        </tbody>
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the TripleDot component', async () => {
    render(
      <table>
        <tbody>
          <UserRow user={mockProps} userRole={userRole} />
        </tbody>
      </table>,
    );

    expect(screen.getByTestId('triple-dot')).toBeInTheDocument();
  });
});
