import { NextComponentType } from "next";
interface Props {
  height: string;
  width: string;
}

const ChevronRight: React.FC<Props> = ({ height, width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${height} ${width}`}
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

export default ChevronRight;