interface Properties {
  bgColor: string;
  height: number;
  // width: number;
  text: string;
}
const Buttons: React.FC<Properties> = (props) => {
  const getButtonClass = () => {
    if (props.bgColor == "bg-slate-300") {
      return `text-sm bg-slate-300 text-black px-5 py-2 w-full h-${props.height} hover:bg-[#40A944] hover:text-white`;
    } else {
      return `text-sm bg-[#40A944] text-black px-5 py-2 w-full h-${props.height} hover:bg-slate-300`;
    }
  };
  return (
    <>
      <div>
        <button className={getButtonClass()}>{props.text}</button>
      </div>
    </>
  );
};

export default Buttons;
