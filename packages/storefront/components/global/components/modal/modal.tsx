import React from 'react';

import { useRouter } from 'next/router';
import { useAppDispatch } from 'customHooks/hooks';
import { setLoginModalState } from 'toolkit/modalSlice';

interface Props {
  setModalOn: Function;
  setChoice: Function;
  trigger?: Function;
  modalTitle?: string;
  bodyText?: string;
}

const Modal: React.FC<Props> = ({
  setModalOn,
  setChoice,
  trigger,
  modalTitle,
  bodyText,
}: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleOKClick = () => {
    setChoice(true);
    if (trigger) {
      setModalOn(false);
      dispatch(setLoginModalState(false));
      trigger();
    } else {
      setModalOn(false);
      dispatch(setLoginModalState(false));
      router.push('/account/sign-in');
    }
  };
  const handleCancelClick = () => {
    setChoice(false);
    dispatch(setLoginModalState(false));
    setModalOn(false);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-neutral-900/40 bg-opacity-75 transition-opacity"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={handleCancelClick}
      >
        <div className="flex h-screen items-center justify-center">
          <div
            className="w-2/3 bg-white px-5 pt-5 sm:w-auto"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            <p>{modalTitle}</p>
            <hr className="mt-3" />
            <div className="flex-col items-center pt-5 pb-12 sm:px-24">
              <div className="mb-2">{bodyText}</div>
              <div className="flex flex-wrap gap-x-5 text-sm">
                <button
                  onClick={handleOKClick}
                  className="rounded bg-[#eef0f1] px-6 py-2 text-black hover:bg-[#40a944]  hover:text-white sm:px-10"
                >
                  YES
                </button>
                <button
                  onClick={handleCancelClick}
                  className="rounded bg-[#eef0f1] px-4 py-2 text-black hover:bg-[#40a944] hover:text-white sm:px-8"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
