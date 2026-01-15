export const getOS = (window: any) => {
  const { userAgent } = window.navigator;

  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }
  if (/win/i.test(userAgent)) {
    return 'Windows';
  }
  if (/android/i.test(userAgent)) {
    return 'Android';
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }
  if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
    return 'Mac OS';
  }
  if (/Linux/.test(userAgent)) {
    return 'Linux';
  }
  return 'Unknown';
};
