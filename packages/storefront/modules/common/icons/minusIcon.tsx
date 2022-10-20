interface IMinuSolidIcon {
  size?: number;
}

const MinusSolidIcon: React.FC<IMinuSolidIcon> = ({ size }: IMinuSolidIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={size ? `h-${size} w-${size}` : 'h-5 w-5'}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MinusSolidIcon;
