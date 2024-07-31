import { render } from '@testing-library/react';

// components
import Category from '@/components/Category';

test('renders Category component with dropdown buttons', () => {
  const { asFragment } = render(
    <table>
      <Category />
    </table>,
  );
  expect(asFragment()).toMatchSnapshot();
});
