const Modal = ({
  setModalOn,
  setChoice,
  trigger,
  modalTitle
}: any) => {
  const handleOKClick = () => {
    setChoice(true);
    trigger();
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-200 opacity-90">
      <div className="flex h-screen items-center justify-center ">
        <div className="rounded-xl border-2 border-green-600/100 bg-white pt-5 px-5">
          <p>{modalTitle}</p>
          <hr className="mt-3"/>
          <div className="flex-col pt-5 pb-12 px-24">
            <div className="mb-2 text-lg">
              Are you sure ?
            </div>
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
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
