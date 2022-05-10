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
  className,
  id,
  onChangeHandler,
  ...props
}) => {
  return (
    <>
      <div className="textareaWrapper">
        <label>{label} *</label>
        <textarea
          placeholder={`${label} *`}
          className={`${className} ${"textarea"}`}
          name={name}
          value={value}
          onChange={onChangeHandler}
          {...props}
        ></textarea>
      </div>
      <style jsx>
        {`
          .textareaWrapper {
            font-size: 14px;
            line-height: 24px;
          }
          .textarea {
            height: 170px;
            border: 1px solid #ededed;
            background: #ffffff;
            resize: none;
            margin-bottom: 20px;
            width: 100%;
            padding: 10px 20px;
            color: #222;
          }
        `}
      </style>
    </>
  );
};
