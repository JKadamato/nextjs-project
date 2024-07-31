import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// constants
import { DEFAULT_LIMIT } from '@/constants/defaultValue';

// components
import Pagination from '@/components/common/Pagination';

const mockUsePathname = jest.fn();
const mockUseSearchParams = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
  useSearchParams: () => mockUseSearchParams(),
}));

describe('Pagination Component', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/test');
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Pagination totalUsers={100} limit={DEFAULT_LIMIT} currentPage={1} />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
