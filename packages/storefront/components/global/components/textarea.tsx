import React from 'react';

export interface TextareaProps {
  label: string;
  value: string | number;
  name: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  onChangeHandler?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  name,
  className = '',
  id,
  onChangeHandler,
  ...props
}) => {
  return (
    <div className="mb-5 text-sm">
      <label>{label} *</label>
      <textarea
        placeholder={label}
        className={`${className} ${'h-44 w-full border border-solid border-slate-200 bg-white px-5 py-2 text-zinc-900'}`}
        name={name}
        value={value}
        onChange={onChangeHandler}
        //{...props}
      ></textarea>
    </div>
  );
};
