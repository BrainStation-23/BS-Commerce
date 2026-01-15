/* eslint-disable arrow-body-style */
export const Wait = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
