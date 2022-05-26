import React from "react";

export interface TextareaProps {
  label: string;
  value: string | number;
  name: string;
  className?: any;
  disabled?: boolean;
  id?: string;
  onChangeHandler?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  name,
  className = "",
  id,
  onChangeHandler,
  ...props
}) => {
  return (
    <div className="text-sm mb-5">
      <label>{label} *</label>
      <textarea
        placeholder={label}
        className={`${className} ${"h-44 bg-white w-full border border-solid border-slate-200 text-zinc-900 px-5 py-2"}`}
        name={name}
        value={value}
        onChange={onChangeHandler}
        {...props}
      ></textarea>
    </div>
  );
};
