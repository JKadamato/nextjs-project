import { render } from '@testing-library/react';

// component
import RoleSkeleton from '@/components/Skeleton/RoleSkeleTon';
describe('RoleSkeleton Component', () => {
  it('renders without crashing and matches snapshot', () => {
    const { asFragment } = render(<RoleSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
