import XRegExp from 'xregexp';
import { string, object, ref, number } from 'yup';

export const informationSchema = object().shape({
  email: string().required(
    'This field must not be empty. Enter an email.'
  ),
  contact: string().required(
    'This field must not be empty. Enter a phone number.'
  ),
  firstName: string(),
  lastName: string().required('Enter a last name'),
  country: string().required('Select a country'),
  address: string().required('Enter an address'),
  addressOptional: string(),
  city: string().required('Enter a city name'),
  postalCode: string().matches(/^[0-9\+]*$/, 'This field only contains digits').required('This field must not be empty'),
});

export const paymentSchema = object().shape({
  // contact: string().required(
  //   'This field must not be empty. Enter an email or phone number.'
  // ),
  // firstName: string(),
  // lastName: string().required('Enter a last name'),
  // country: string().required('Select a country'),
  // address: string().required('Enter an address'),
  // addressOptional: string(),
  // city: string().required('Enter a citys'),
  // postalCode: string().matches(/^[0-9\+]*$/, 'This field only contains digits'),
  cardNumber: string().matches(/^[0-9\+]*$/, 'Enter a valid card number').required('This field must not be empty'),
  nameOnCard: string().required("Enter your name exactly as it’s written on your card"),
  expirationDate: string().required("Enter a valid card expiry date"),
  securityCode: string().required("Enter the CVV or security code on your card")
});
