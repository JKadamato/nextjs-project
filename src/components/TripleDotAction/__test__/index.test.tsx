import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TripleDotActions from '..';

describe('TripleDotActions', () => {
  const mockToggleDropdown = jest.fn();
  const mockOnBlur = jest.fn();
  const mockOnDelete = jest.fn();
  const link = '/edit-link';

  let _handleClickOutside: (event: MouseEvent) => void;

  beforeEach(() => {
    jest.clearAllMocks();
    // Mock addEventListener and removeEventListener
    jest
      .spyOn(document, 'addEventListener')
      .mockImplementation((event, handler) => {
        if (event === 'mousedown') {
          _handleClickOutside = handler as (event: MouseEvent) => void;
        }
      });
    jest.spyOn(document, 'removeEventListener');
  });

  it('renders the TripleDot button', () => {
    render(
      <TripleDotActions
        isDropdownOpen={false}
        link={link}
        toggleDropdown={mockToggleDropdown}
        onBlur={mockOnBlur}
        onDelete={mockOnDelete}
      />,
    );

    expect(screen.getByTestId('triple-dot')).toBeInTheDocument();
  });

  it('opens the dropdown menu when the TripleDot button is clicked', () => {
    render(
      <TripleDotActions
        isDropdownOpen={false}
        link={link}
        toggleDropdown={mockToggleDropdown}
        onBlur={mockOnBlur}
        onDelete={mockOnDelete}
      />,
    );

    fireEvent.click(screen.getByTestId('triple-dot'));

    expect(mockToggleDropdown).toHaveBeenCalled();
    expect(document.addEventListener).toHaveBeenCalledWith(
      'mousedown',
      expect.any(Function),
    );
  });

  it('navigates to the edit link when the Edit button is clicked', () => {
    render(
      <TripleDotActions
        isDropdownOpen={true}
        link={link}
        toggleDropdown={mockToggleDropdown}
        onBlur={mockOnBlur}
        onDelete={mockOnDelete}
      />,
    );

    const editLink = screen.getByTestId('edit-link');
    expect(editLink).toHaveAttribute('href', link);

    fireEvent.click(editLink);

    expect(mockOnBlur).toHaveBeenCalled();
  });

  it('calls onDelete when the Delete button is clicked', () => {
    render(
      <TripleDotActions
        isDropdownOpen={true}
        link={link}
        toggleDropdown={mockToggleDropdown}
        onBlur={mockOnBlur}
        onDelete={mockOnDelete}
      />,
    );

    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalled();
  });

  // Snapshot test
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <TripleDotActions
        isDropdownOpen={false}
        link={link}
        toggleDropdown={mockToggleDropdown}
        onBlur={mockOnBlur}
        onDelete={mockOnDelete}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
