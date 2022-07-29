import React from 'react';

export interface InputProps {
  label: string;
  value: string | number;
  type: string;
  name: string;
  className?: any;
  disabled?: boolean;
  id?: string;
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  type,
  name,
  className = '',
  id,
  onChangeHandler,
  ...props
}) => {
  return (
    <div className="mb-5 text-sm">
      <label>{label} *</label>
      <input
        type={type}
        placeholder={label}
        className={`${className} ${'h-12 w-full border border-solid border-slate-200 bg-white px-5 text-zinc-900'}`}
        name={name}
        value={value}
        //{...props}
        onChange={onChangeHandler}
      />
    </div>
  );
};
