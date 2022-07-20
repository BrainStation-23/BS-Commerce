import { useAppDispatch } from 'customHooks/hooks';
import { useRouter } from 'next/router';
import { setWishlistModalState } from 'toolkit/modalSlice';

const Modal = ({
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
    <div className="fixed inset-0 z-50 bg-zinc-200 bg-opacity-90">
      <div className="flex h-screen items-center justify-center ">
        <div className="rounded-xl border-2 border-green-600/100 bg-white px-5 pt-5">
          <p>{modalTitle}</p>
          <hr className="mt-3" />
          <div className="flex-col px-24 pt-5 pb-12">
            <div className="mb-2 text-lg">{bodyText}</div>
            <div className="flex">
              <button
                onClick={handleOKClick}
                className=" rounded bg-green-600/100 px-4 py-2 text-white  hover:bg-black "
              >
                Yes
              </button>
              <button
                onClick={handleCancelClick}
                className="ml-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-black "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
