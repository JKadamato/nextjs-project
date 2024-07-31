'use client';
import { SelectType } from '@/types/SelectType';

interface DropdownProps {
  label: string | number;
  options: SelectType[];
  customClass?: string;
  value: string;
  onChange?: (value: string) => void;
  handleSortDateFromHighToLow?: () => void;
  handleSortDateFromLowToHigh?: () => void;
  handleSortFullNameFromHighToLow?: () => void;
  handleSortFullNameFromLowToHigh?: () => void;
}

const Dropdown = ({
  label,
  options,
  customClass,
  value,
  onChange,
  handleSortDateFromHighToLow,
  handleSortDateFromLowToHigh,
  handleSortFullNameFromHighToLow,
  handleSortFullNameFromLowToHigh,
}: DropdownProps) => {
  return (
    <div>
      <select
        name="userRole"
        onChange={(e) => {
          e.target.value.toLocaleLowerCase() == 'asc'
            ? handleSortDateFromLowToHigh && handleSortDateFromLowToHigh()
            : e.target.value.toLocaleLowerCase() == 'desc'
              ? handleSortDateFromHighToLow &&
              handleSortDateFromHighToLow()
              : e.target.value.toLocaleLowerCase() == 'role'
                ? handleSortDateFromHighToLow && handleSortDateFromHighToLow()
                : onChange && onChange(e.target.value);
        }}
        className={`inline-flex justify-center w-full rounded-3xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none max-w-32 ${customClass}`}
      >
        <option value={value}>{label}</option>

        {label === 'Joined' &&
          options.map((option) => (
            <option
              key={option.id}
              value={option.label}
              onClick={handleSortDateFromLowToHigh}
            >
              {option.label}
            </option>
          ))}
        {label === 'Full Name' &&
          options.map((option) => (
            <option
              key={option.id}
              value={option.label}
              onClick={
                option.label == 'asc'
                  ? handleSortFullNameFromLowToHigh
                  : handleSortFullNameFromHighToLow
              }
            >
              {option.label}
            </option>
          ))}

        {label !== 'Joined' && label !== 'Full Name' && label == 'Role' && (
          <>
            {options.map((option) => (
              <option key={option.id} value={option.label}>
                {option.label}
              </option>
            ))}
          </>
        )}

        {label !== 'Joined' && label !== 'Full Name' && label !== 'Role' && (
          <>
            {options.map((option) => (
              <option
                key={option.id}
                value={option.id}
                onClick={handleSortDateFromHighToLow}
              >
                {option.label}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default Dropdown;
