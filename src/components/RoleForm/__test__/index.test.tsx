import { render } from '@testing-library/react';

// components
import RoleForm from '@/components/RoleForm';

test('renders user form', () => {
  const { asFragment } = render(<RoleForm />);
  expect(asFragment()).toMatchSnapshot();
});
