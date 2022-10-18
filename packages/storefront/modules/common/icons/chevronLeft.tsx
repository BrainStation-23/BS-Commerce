import { NextComponentType } from "next";

interface Props {
  height: string;
  width: string;
}

const ChevronLeft: React.FC<Props> = ({ height, width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${height} ${width}`}
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
};

export default ChevronLeft;
