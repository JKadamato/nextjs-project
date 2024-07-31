import { render, screen } from '@testing-library/react';

// component
import { Input } from '@/components/common/Input';

const name = 'testName';
const label = 'Test Label';
const type = 'text';
const placeholder = 'Test Placeholder';

describe('Input', () => {
  const mockOnChange = jest.fn();

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Input
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={mockOnChange}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders input element with correct attributes', () => {
    render(
      <Input
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={mockOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(placeholder);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', name);
    expect(inputElement).toHaveAttribute('type', type);
  });
});
