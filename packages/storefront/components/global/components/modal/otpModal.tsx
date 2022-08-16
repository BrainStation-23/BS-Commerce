import React from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const OtpModal = ({ setModalOn, setChoice, modalTitle, bodyText }: any) => {
  const [copyState, setCopyState] = useState({
    value: bodyText,
    copied: false,
  });

  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };

  const handleCancelClick = () => {
    setChoice(false);
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
              <CopyToClipboard
                text={copyState.value}
                onCopy={() => setCopyState({ ...copyState, copied: true })}
              >
                <button>Copy to clipboard</button>
              </CopyToClipboard>
              <button
                onClick={handleOKClick}
                className="rounded bg-[#eef0f1] px-6 py-2 text-black hover:bg-[#40a944]  hover:text-white sm:px-10"
              >
                YES
              </button>
              <div className="flex flex-wrap gap-x-5 text-sm">
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

export default OtpModal;
