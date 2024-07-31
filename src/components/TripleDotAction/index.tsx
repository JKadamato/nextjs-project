'use client';
import { useRef } from 'react';
import Link from 'next/link';

// icons
import { EditIcon } from '@/icons/EditIcon';
import { TrashIcon } from '@/icons/TrashIcon';
import { TripleDot } from '@/icons/TripleDot';

interface DropdownMenuProps {
  isDropdownOpen: boolean;
  link: string;
  toggleDropdown: () => void;
  onBlur: () => void;
  onDelete: () => void;
}

const TripleDotActions = ({
  link,
  isDropdownOpen,
  toggleDropdown,
  onBlur,
  onDelete,
}: DropdownMenuProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      onBlur();
    }
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    toggleDropdown();
    document.addEventListener('mousedown', handleClickOutside);
  };

  const handleDropdownClose = () => {
    document.removeEventListener('mousedown', handleClickOutside);
    onBlur();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="text-gray-500 p-1 rounded-full hover:bg-gray-200"
        data-testid="triple-dot"
        onClick={handleButtonClick}
        aria-label="More options"
      >
        <TripleDot />
      </button>
      {isDropdownOpen && (
        <div className="absolute z-50 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul>
            <li>
              <Link
                href={link}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleDropdownClose}
                data-testid="edit-link"
              >
                <EditIcon />
                <div className="ml-2">Edit</div>
              </Link>
            </li>

            <li>
              <button
                data-testid="delete-button"
                onClick={onDelete}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                <TrashIcon />
                <div className="ml-2">See Details</div>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TripleDotActions;
