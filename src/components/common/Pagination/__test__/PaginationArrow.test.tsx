import { render } from '@testing-library/react';
import PaginationArrow from '../PaginationArrow';

describe('PaginationArrow', () => {
  test('should render PaginationArrow component', () => {
    const { asFragment } = render(
      <PaginationArrow href="/page/2" direction="left" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
