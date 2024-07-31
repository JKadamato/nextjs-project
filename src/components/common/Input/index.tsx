import { ChangeEvent, HTMLInputTypeAttribute, useCallback } from 'react';

interface Props {
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  customClass?: string;
}

export const Input = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  customClass,
}: Props) => {
  const handleChangeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => onChange(e.target.value),
    [onChange],
  );

  const baseClass =
    'rounded-[10px] w-full h-12 py-2 px-4 bg-white-300 text-dark-90 placeholder-dark-50 leading-tight border border-gray-300 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-slate-300';
  return (
    <div>
      <label
        className="block text-dark-100 text-sm font-medium leading-5 mb-4"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={[baseClass, customClass].join(' ')}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  );
};
