// All icon source in heroicons by Tailwind

interface IMenuIcon {
  size?: number;
}
export const MenuIcon: React.FC<IMenuIcon> = ({ size }: IMenuIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={size ? `h-${size} w-${size}` : 'h-7 w-7'}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

interface ChevronDownIcon {
  size?: number;
}

export const ChevronDownIcon: React.FC<ChevronDownIcon> = ({
  size,
}: ChevronDownIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={size ? `h-${size} w-${size}` : 'h-5 w-5'}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const PhoneIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
};

interface IXCircleIcon {
  size?: number;
  extraClass?: string;
}

export const XCircleIcon: React.FC<IXCircleIcon> = ({
  size,
  extraClass,
}: IXCircleIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${size ? `h-${size} w-${size}` : 'h-10 w-10'} ${
        extraClass ? extraClass : ''
      }`}
      fill="#40A944"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export const ChevronRightIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

interface IPlusSolidIcon {
  size?: number;
}

export const PlusSolidIcon: React.FC<IPlusSolidIcon> = ({
  size,
}: IPlusSolidIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={size ? `h-${size} w-${size}` : 'h-5 w-5'}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

interface IMinuSolidIcon {
  size?: number;
}

export const MinusSolidIcon: React.FC<IMinuSolidIcon> = ({
  size,
}: IMinuSolidIcon) => {
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
