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
  className,
  id,
  onChangeHandler,
  ...props
}) => {
  return (
    <>
      <div className="inputWrapper">
        <label>{label} *</label>
        <input
          type={type}
          placeholder={`${label} *`}
          className={`${className} ${"input"}`}
          name={name}
          value={value}
          {...props}
          onChange={onChangeHandler}
        />
      </div>
      <style jsx>
        {`
          .inputWrapper {
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 20px;
          }
          .input {
            border: 1px solid #ededed;
            height: 45px;
            background: #ffffff;
            width: 100%;
            padding: 0 20px;
            color: #757575;
          }
        `}
      </style>
    </>
  );
};
