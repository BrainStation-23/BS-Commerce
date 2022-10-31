interface IXCircleIcon {
  size?: number;
  extraClass?: string;
}

const XCircleIcon: React.FC<IXCircleIcon> = ({
  size,
  extraClass,
}: IXCircleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${size ? `h-${size} w-${size}` : 'h-10 w-10'} ${
        extraClass ? extraClass : ''
      } fill-primary dark:fill-dark_primary`}
      // fill="#40A944"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={1}
      id="sidebar-close"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default XCircleIcon;
