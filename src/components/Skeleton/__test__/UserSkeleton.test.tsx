import { render } from '@testing-library/react';

// component
import UserSkeleton from '@/components/Skeleton/UserSkeleton';

describe('RoleSkeleton Component', () => {
  it('renders without crashing and matches snapshot', () => {
    const { asFragment } = render(<UserSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
