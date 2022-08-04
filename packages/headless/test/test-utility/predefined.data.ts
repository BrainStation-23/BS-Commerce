// setup user testing data
export const testUserId = '3abd43bd-a85e-4e9f-96be-0fc56530e3a8';
export const testUsername = 'test1@mail.com';

// setup admin testing data
export const AdminId = '21b38a0b-95f8-43bf-90f1-7dfb64ed885b';
export const Username = 'ismail61@gmail.com';

//
export const testTimeout = 30 * 1000;
export const testProductId = '76e9c15f-6816-439c-9a4f-e2fc902ffbf5';

// create user data
export const testFirstName = 'fname';
export const testLastName = 'lname';
export const testEmail = 'test1@mail.com';
export const testPassword = '12345678';

export const signUpDemoUser = () => {
  return {
    firstName: testFirstName,
    lastName: testLastName,
    email: testEmail,
    password: testPassword,
  };
};

export const signInDemoUser = () => {
  return {
    username: testEmail,
    password: testPassword,
  };
};
