export interface IconsProp {
  classes: string;
  stroke?: string;
  strokeWidth?: string;
  fill: string;
  iconName: string;
  onClick?: Function;
}

/**
 * Primary UI component for user interaction
 */
export const Icons: React.FC<IconsProp> = ({
  classes = "h-3 w-3",
  stroke = "currentColor",
  strokeWidth = "1",
  fill = "none",
  iconName,
  onClick,
}) => {
  return (
    <>
      {iconName === "cross" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}

      {iconName === "chevron-left" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          viewBox="0 0 20 20"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}

      {iconName === "chevron-right" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          viewBox="0 0 24 24"
          strokeWidth={strokeWidth}
          stroke={stroke}
          className={classes}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      )}

      {iconName === "heart" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          fill={fill}
          viewBox="0 0 24 24"
          stroke={stroke}
          strokeWidth={strokeWidth}
          data-tooltip-target="tooltip-right"
          data-tooltip-placement="right"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      )}

      {iconName === "truck" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          viewBox="0 0 24 24"
          strokeWidth={strokeWidth}
          stroke={stroke}
          className={classes}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
      )}

      {iconName === "support" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          fill={fill}
          viewBox="0 0 24 24"
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}

      {iconName === "return" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          fill={fill}
          viewBox="0 0 24 24"
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
          />
        </svg>
      )}

      {iconName === "creditCard" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          fill={fill}
          viewBox="0 0 24 24"
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      )}

      {iconName === "cart" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          fill={fill}
          viewBox="0 0 24 24"
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      )}

      {iconName === "search" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          fill={fill}
          viewBox="0 0 24 24"
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      )}

      {iconName === "circle-arrow" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          fill={fill}
          viewBox="0 0 24 24"
          stroke={stroke}
          strokeWidth={strokeWidth}
          onClick={onClick ? onClick() : ""}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      )}

      {iconName === "chevron-down" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          viewBox="0 0 20 20"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}

      {iconName === "chevron-up" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          viewBox="0 0 20 20"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}

      {iconName === "lock" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          viewBox="0 0 20 20"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
};
