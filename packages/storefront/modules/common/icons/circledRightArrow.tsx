interface Props {
  height: string;
  width: string;
}

const CircledRightArrow: React.FC<Props> = ({ height, width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${height} ${width}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </>
  );
};

export default CircledRightArrow;
