import React from 'react';

import { useRouter } from 'next/router';
import { useAppDispatch } from 'customHooks/hooks';
import { setWishlistModalState } from 'toolkit/modalSlice';

const Modal: React.FC = ({
  setModalOn,
  setChoice,
  trigger,
  modalTitle,
  bodyText,
}: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleOKClick = () => {
    setChoice(true);
    if (trigger) {
      setModalOn(false);
      trigger();
    } else {
      setModalOn(false);
      router.push('/account/sign-in');
    }
  };
  const handleCancelClick = () => {
    setChoice(false);
    dispatch(setWishlistModalState(false));
    setModalOn(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-[#808080] bg-opacity-50">
        <div className="flex h-screen items-center justify-center ">
          <div className=" bg-white px-5 pt-5">
            <p>{modalTitle}</p>
            <hr className="mt-3" />
            <div className="flex-col px-24 pt-5 pb-12">
              <div className="mb-2">{bodyText}</div>
              <div className="flex gap-x-5 text-sm">
                <button
                  onClick={handleOKClick}
                  className="rounded bg-[#eef0f1] px-10 py-2 text-black  hover:bg-[#40a944] hover:text-white"
                >
                  YES
                </button>
                <button
                  onClick={handleCancelClick}
                  className="rounded bg-[#eef0f1] px-8 py-2 text-black hover:bg-[#40a944] hover:text-white"
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
