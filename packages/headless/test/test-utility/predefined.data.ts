// setup user testing data
export const testUserId = '0ace6388-bce8-4417-86b1-15240b8a381c';
export const testUsername = 'mostafa@bs.com';

//
export const testTimeout = 30 * 1000;

// create user data
export const testFirstName = 'Mostafa';
export const testLastName = 'Mahmud';
export const testEmail = 'mostafa@bs.com';
export const testPassword = 'mostafa-bs@23';

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
