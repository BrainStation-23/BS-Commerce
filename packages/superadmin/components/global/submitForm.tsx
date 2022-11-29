import Link from "next/link";
import React, { useRef, useEffect, FC, ReactChild, ReactChildren } from "react";

interface Props {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  isDisabled: boolean;
  title: string;
  isHiddenSaveWithContinue: boolean;
  submitBtnText: string;
  continueBtnText: string;
  isHiddenSave: boolean;
  getProps: (propsObj: {}) => void;
  isDelete: boolean;
  link?: string;
  isEdit?: boolean;
}

const SubmitForm: FC<Props> = ({
  children,
  isDisabled,
  title,
  isHiddenSaveWithContinue,
  isHiddenSave,
  submitBtnText,
  continueBtnText,
  getProps,
  isDelete = false,
  link = "",
  isEdit = false,
}) => {
  const saveBtnRef = useRef<HTMLButtonElement>(null);
  const saveBtnClicker = () => {
    if (saveBtnRef && saveBtnRef?.current) {
      saveBtnRef.current?.click();
    }
  };

  const saveWithContinueBtnRef = useRef<HTMLButtonElement>(null);
  const saveWithContinueClick = () => {
    if (saveWithContinueBtnRef && saveWithContinueBtnRef.current) {
      saveWithContinueBtnRef.current?.click();
    }
  };

  const deleteBtnRef = useRef<HTMLButtonElement>(null);
  const deleteClick = () => {
    if (deleteBtnRef && deleteBtnRef.current) {
      deleteBtnRef.current?.click();
    }
  };

  useEffect(() => {
    const propsObj = {
      saveBtnRef,
      saveWithContinueBtnRef,
      deleteBtnRef,
    };
    getProps(propsObj);
  }, []);

  return (
    <div className="">
      <div className="my-3 d-flex justify-content-between flex-wrap">
        <div className="d-flex flex-grow-1">
          <div className="fs-2 me-2">
            {isEdit ? `Edit ${title} details` : `Add a new ${title}`}
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-arrow-left-circle-fill"></i>
            <Link href={link} className="fs-5 ms-1 text-decoration-none">
              back to{title}list
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-end flex-grow-1">
          <button
            type="submit"
            className={isHiddenSave ? "d-none" : "btn btn-primary me-2"}
            onClick={saveBtnClicker}
            ref={saveBtnRef}
            disabled={isDisabled}
          >
            <i className="bi bi-sd-card pe-1 align-middle"></i>
            {submitBtnText ? submitBtnText : "Save"}
          </button>
          <button
            type="button"
            onClick={saveWithContinueClick}
            ref={saveWithContinueBtnRef}
            className={
              isHiddenSaveWithContinue ? "d-none" : "btn btn-primary me-2"
            }
          >
            <i className="bi bi-sd-card pe-1 align-middle"></i>
            {continueBtnText ? continueBtnText : ""}
          </button>
          <button
            type="button"
            onClick={deleteClick}
            ref={deleteBtnRef}
            className={isDelete ? "btn btn-danger" : "d-none"}
          >
            <i className="bi bi-trash pe-1 align-middle"></i>
            Delete
          </button>
        </div>
      </div>
      <div className="mt-2">
        <>{children}</>
      </div>
    </div>
  );
};

export default SubmitForm;
