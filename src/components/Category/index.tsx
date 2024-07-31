'use client';
// mocks
import { listCategory } from '@/mocks';

// components
import Dropdown from '@/components/common/Dropdown';
import { RoleModel } from '@/models/RoleModel';

const Category = ({
  roles,
  handleSortDateFromHighToLow,
  handleSortDateFromLowToHigh,
  handleSortFullNameFromHighToLow,
  handleSortFullNameFromLowToHigh,
  handleFilterRole,
}: {
  roles: RoleModel[];
  handleSortDateFromHighToLow: () => void;
  handleSortDateFromLowToHigh: () => void;
  handleSortFullNameFromHighToLow: () => void;
  handleSortFullNameFromLowToHigh: () => void;
  handleFilterRole: (role: string) => void;
}) => {
  console.log(roles);
  return (
    <thead>
      <tr className="flex items-center justify-between pl-0 md:pl-0 pr-8 md:pr-12 border-b border-gray-200">
        {listCategory.map(({ id, label, options = [] }) => (
          <th key={id} className="text-left mb-4 sm:mb-0">
            {/* <Dropdown
              value={id}
              label={label}
              handleSortDateFromHighToLow={handleSortDateFromHighToLow}
              handleSortDateFromLowToHigh={handleSortDateFromLowToHigh}
              handleSortFullNameFromHighToLow={handleSortFullNameFromHighToLow}
              handleSortFullNameFromLowToHigh={handleSortFullNameFromLowToHigh}
              options={
                label === 'Role'
                  ? roles.map((role) => ({
                      id: role.id.toString(),
                      label: role.name,
                    }))
                  : options.map((option) => ({
                      id: option.value,
                      ...option,
                    }))
              }
            /> */}

            {
              <select
                name="userRole"
                onChange={(e) => {
                  if (Number(id) === 4) {
                    e.target.value.toLocaleLowerCase() == 'asc'
                      ? handleSortDateFromLowToHigh()
                      : handleSortDateFromHighToLow();
                  } else if (Number(id) === 2) {
                    e.target.value.toLocaleLowerCase() == 'asc'
                      ? handleSortFullNameFromLowToHigh()
                      : handleSortFullNameFromHighToLow();
                  } else if (Number(id) === 3) {
                    handleFilterRole(e.target.value);
                  }
                }}
                // onChange={(e) => onChange && onChange(e.target.value)}
                className={`inline-flex justify-center w-full rounded-3xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none max-w-32`}
              >
                <option value={id}>{label}</option>
                {label.toLowerCase() === 'role' &&
                  roles.map((option) => (
                    <option
                      key={option.id}
                      value={option.name}
                      onClick={handleSortDateFromLowToHigh}
                    >
                      {option.name}
                    </option>
                  ))}
                {label.toLowerCase() !== 'role' &&
                  options.map((option) => (
                    <option
                      key={option.id}
                      value={option.label}
                      onClick={handleSortDateFromLowToHigh}
                    >
                      {option.label}
                    </option>
                  ))}
              </select>
            }
          </th>
        ))}
        <th className="text-left flex items-center mb-4 sm:mb-0" />
      </tr>
    </thead>
  );
};

export default Category;
