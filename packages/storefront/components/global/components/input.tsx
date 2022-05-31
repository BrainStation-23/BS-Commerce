import React from "react";

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
  className = "",
  id,
  onChangeHandler,
  ...props
}) => {
  return (
    <div className="text-sm mb-5">
      <label>{label} *</label>
      <input
        type={type}
        placeholder={label}
        className={`${className} ${"h-12 bg-white w-full border border-solid border-slate-200 text-zinc-900 px-5"}`}
        name={name}
        value={value}
        {...props}
        onChange={onChangeHandler}
      />
    </div>
  );
};
