import { render } from '@testing-library/react';

// components
import Category from '@/components/common/Dropdown';

// mocks
import { roleOptions } from '@/mocks';

test('renders dropdown button with label and options', () => {
  const { asFragment } = render(
    <Category
      label="Dropdown"
      options={roleOptions}
      value={roleOptions[0].id}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
