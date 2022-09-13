import React from "react";

export interface ToggleProps {
  labelClass: string;
  labelText: string;
  onClick?: () => void;
  type: string;
  checked?: boolean;
  value?: string;
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Toggle: React.FC<ToggleProps> = ({
  labelClass,
  labelText,
  onClick,
  type,
  checked,
  value,
  disabled,
}) => {
  return (
    <>
      <label className={labelClass}>
        <input
          type={type}
          value={value ? value : ""}
          className={`peer sr-only `}
          onClick={onClick}
          checked={checked ? checked : false}
          disabled={disabled ? disabled : false}
        />
        <div
          className={`peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white  dark:border-gray-600 dark:bg-gray-700`}
        ></div>
        <span className="ml-3 hidden text-sm font-medium text-gray-900 dark:text-gray-300 md:block">
          {labelText}
        </span>
      </label>
    </>
  );
};
