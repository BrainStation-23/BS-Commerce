// eslint-disable-next-line import/no-extraneous-dependencies
import Decimal from 'decimal.js';

// Configure Decimal globally
Decimal.set({
  precision: 18, // high internal precision
  rounding: Decimal.ROUND_HALF_UP,
});

// Core decimal helpers
export const toDecimal = (value: string | number | Decimal): Decimal => new Decimal(value);

// Math operations – full precision
export const add = (a: string | number | Decimal, b: string | number | Decimal): Decimal =>
  toDecimal(a).plus(b);

export const subtract = (a: string | number | Decimal, b: string | number | Decimal): Decimal =>
  toDecimal(a).minus(b);

export const multiply = (a: string | number | Decimal, b: string | number | Decimal): Decimal =>
  toDecimal(a).mul(b);

export const divide = (a: string | number | Decimal, b: string | number | Decimal): Decimal =>
  toDecimal(a).div(b);

// Rounding – only for output/storage
export const roundTo4 = (value: string | number | Decimal): string =>
  toDecimal(value).toFixed(4, Decimal.ROUND_HALF_UP);

export const roundTo4Number = (value: string | number | Decimal): number => Number(roundTo4(value));

// Rounding – only for output/storage
export const roundTo2 = (value: string | number | Decimal): string =>
  toDecimal(value).toFixed(2, Decimal.ROUND_HALF_UP);

export const roundTo2Number = (value: string | number | Decimal): number => Number(roundTo2(value));

// Example Usage (TypeScript)

// const principal = toDecimal('1000.4546');
// const interestRate = 0.05;
// const taxRate = 0.075;

// const interest = multiply(principal, interestRate); // Decimal
// const gross = add(principal, interest); // Decimal
// const tax = multiply(interest, taxRate); // Decimal
// const net = subtract(gross, tax); // Decimal

// const result = {
//   principal: roundTo4(principal), // string
//   interest: roundTo4(interest),
//   gross: roundTo4(gross),
//   tax: roundTo4(tax),
//   net: roundTo4(net),
// };

// console.log(result);

// the functions return object. convert to number or string before using the returned results.
// value is a Decimal instance, not a JavaScript number.

// That’s why direct math with +, -, *, / won’t work unless you use Decimal methods like .plus(), .minus(), etc.
// const d = new Decimal('123.456');

// Convert to JS number (may lose precision if very large/precise)
// const num = d.toNumber();   // → 123.456

// Convert to string first (safer for preserving formatting)
// const str = d.toString();   // → "123.456"
// const num2 = Number(str);   // → 123.456
