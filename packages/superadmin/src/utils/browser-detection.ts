/**
 * Utilities for detecting browser and device information
 */

/**
 * Detects if the application is being viewed on a mobile device
 */
export const isMobile = (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent.toLowerCase()
  );
};

/**
 * Gets the current browser name
 */
export const getBrowserName = (): string => {
  const { userAgent } = navigator;

  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('SamsungBrowser')) return 'Samsung Browser';
  if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';
  if (userAgent.includes('Edge') || userAgent.includes('Edg')) return 'Edge';
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Safari')) return 'Safari';
  return 'Unknown';
};

/**
 * Detects if the user is on a specific browser
 */
export const isChrome = (): boolean => getBrowserName() === 'Chrome';
export const isFirefox = (): boolean => getBrowserName() === 'Firefox';
export const isSafari = (): boolean => getBrowserName() === 'Safari';
export const isEdge = (): boolean => getBrowserName() === 'Edge';
export const isOpera = (): boolean => getBrowserName() === 'Opera';

/**
 * Detects if the user is on iOS
 */
export const isIOS = (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
};

/**
 * Detects if the user is on Android
 */
export const isAndroid = (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /android/i.test(userAgent);
};

/**
 * Detects if the application is being viewed on a tablet
 */
export const isTablet = (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/i.test(userAgent.toLowerCase());
};

/**
 * Detects if the application is in a standalone PWA mode
 */
export const isPWA = (): boolean =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (window.navigator as any).standalone === true;
