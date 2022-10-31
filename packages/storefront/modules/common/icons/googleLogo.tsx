const GoogleLogo = () => {
  return (
    <>
      <svg
        className="mt-1"
        width="20"
        height="20"
        viewBox="-380.25 274.7 65.8 65.8"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle cx="-347.3" cy="307.6" r="32.9" style={{ fill: '#e0e0e0' }} />
        <circle cx="-347.3" cy="307.1" r="32.4" style={{ fill: '#fff' }} />
        <defs>
          <path
            id="a"
            d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4a21.94 21.94 0 0 0-36.5 16.5c0 12.2 9.8 22 22 22 11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
          />
        </defs>
        <clipPath id="b">
          <use xlinkHref="#a" overflow="visible" />
        </clipPath>
        <path
          d="M-370.8 320.3v-26l17 13z"
          style={{ clipPath: `url(#b)`, fill: '#fbbc05' }}
        />
        <defs>
          <path
            id="c"
            d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4a21.94 21.94 0 0 0-36.5 16.5c0 12.2 9.8 22 22 22 11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
          />
        </defs>
        <clipPath id="d">
          <use xlinkHref="#c" overflow="visible" />
        </clipPath>
        <path
          d="m-370.8 294.3 17 13 7-6.1 24-3.9v-14h-48z"
          style={{ clipPath: 'url(#d)', fill: '#ea4335' }}
        />
        <defs>
          <path
            id="e"
            d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4a21.94 21.94 0 0 0-36.5 16.5c0 12.2 9.8 22 22 22 11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
          />
        </defs>
        <clipPath id="f">
          <use xlinkHref="#e" overflow="visible" />
        </clipPath>
        <path
          d="m-370.8 320.3 30-23 7.9 1 10.1-15v48h-48z"
          style={{ clipPath: 'url(#f)', fill: '#34a853' }}
        />
        <g>
          <defs>
            <path
              id="g"
              d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4a21.94 21.94 0 0 0-36.5 16.5c0 12.2 9.8 22 22 22 11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            />
          </defs>
          <clipPath id="h">
            <use xlinkHref="#g" overflow="visible" />
          </clipPath>
          <path
            d="m-322.8 331.3-31-24-4-3 35-10z"
            style={{ clipPath: 'url(#h)', fill: '#4285f4' }}
          />
        </g>
      </svg>
    </>
  );
};

export default GoogleLogo;
