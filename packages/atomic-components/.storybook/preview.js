import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";

const BREAKPOINTS_INT = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

customViewports.IPHONEXR = {
  name: "IPHONE XR",
  styles: {
    width: "414px",
    height: "896px",
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  layout: "fullscreen",
};
