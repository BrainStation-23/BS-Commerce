import * as Yup from 'yup';

export const decimalValidation = (maxDecimalPlaces: number) =>
  Yup.number()
    .typeError('Amount must be a number')
    .min(1, 'Amount must be greater than 0')
    .test('decimal', `Amount must have at most ${maxDecimalPlaces} decimal places`, (value) => {
      if (value !== undefined && value !== null) {
        const regex = new RegExp(`^\\d+(\\.\\d{1,${maxDecimalPlaces}})?$`);
        return regex.test(value.toString());
      }
      return true;
    });
