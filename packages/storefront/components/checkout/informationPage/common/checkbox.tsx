interface Props {
  name: string;
  type: string;
  value: string;
  text: string;
}

const Checkbox: React.FC<Props> = (props) => {
  const {name, type, value, text} = props;
  return (
    <>
      {/* has animation */}
      <div className="flex flex-wrap items-center">
        <input
          id={`${name}`}
          type={`${type}`}
          value={`${value}`}
          name={`${name}`}
          className="accent-black 
                    w-4 
                    h-4 
                    border-2 
                    border-black
                    rounded 
                    focus:ring-3 
                    focus:ring-black
                    hover:border-gray-300"
          required
        />
        <label htmlFor="sendNotificationCheckbox" className="ml-2 text-sm text-gray-500">
          {text}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
