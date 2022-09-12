import { Customer } from "models";

export const customerData: Customer[] = [
  {
    id: '2f6d2a90-c9f0-408a-829b-a2ac75cbadfe',
    phone: '01711111111',
    email: 'user@email.com',
    password: '123456',
    addresses: [
      {
        id: '2513d2e5-17eb-4c0b-b98d-2438b62b31ec',
        firstName: 'New',
        lastName: 'User',
        addressLine1: '123 Malibagh',
        isDefault: false,
        addressLine2: '343 Siddheswari',
        state: 'Dhaka',
        postCode: '1234',
        phone: '01711111111',
        tag: 'Home',
      },
    ],
    name: 'New User',
  },
];
