import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

// components
import SideNav from '@/components/SideNav';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('SideNav Component', () => {
  let mockUsePathname: jest.Mock;

  beforeAll(() => {
    mockUsePathname = usePathname as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing and matches snapshot', () => {
    const { asFragment } = render(<SideNav />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correct links', () => {
    const { getByText } = render(<SideNav />);

    expect(getByText('Roles')).toBeInTheDocument();
    expect(getByText('Users')).toBeInTheDocument();
  });

  it('applies correct link class when link is active', () => {
    mockUsePathname.mockReturnValue('/roles');
    render(<SideNav />);

    const rolesLink = screen.getByText('Roles');

    expect(rolesLink.parentElement).toHaveClass(
      'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-sky-100 text-blue-600 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
    );
  });

  it('renders Users link as inactive', () => {
    mockUsePathname.mockReturnValue('/roles');
    render(<SideNav />);
    const usersLink = screen.getByText('Users');

    expect(usersLink.parentElement).toHaveClass(
      'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
    );
  });
});
