export const makeCallTo = (phoneNo: string) => {
  // alert(`making a call to ${phoneNo}`);
  window.location.href = `tel:${phoneNo}`;
};
