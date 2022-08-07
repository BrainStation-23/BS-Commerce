describe('Login to storefront & check flow', () => {
  // it('should be redirected to login page', () => {
  //   // Start from the index page
  //   cy.visit('/account/sign-in');
  // });

  it('should Register', () => {
    //go to homepage
    cy.visit('/account/sign-up');

    //Enter email and password
    cy.get('#email').type('test@user.com');
    cy.get('#password').type('123456');

    // Click login
    cy.contains('button', 'Sign Up').click();

    cy.wait(1000);
  });

  it('should Log in', () => {
    //go to homepage
    cy.visit('/');

    //expand sidebar
    cy.get('.border-gray-700 > .h-7').click();

    //Go to Login page
    cy.get(
      '.fixed > :nth-child(3) > .flex-col > .my-0 > [href="/account/sign-in"]'
    ).click();

    //Enter email and password
    cy.get('#email').type('test@user.com');
    cy.get('#password').type('123456');

    // Click login
    cy.contains('button', 'Sign In').click();

    //close sidebar
    cy.get('.h-10 > path').click();
  });

  it('should add product to cart and go to cart page', () => {
    //Add product to cart
    cy.get(
      '.swiper-slide-active > .col > :nth-child(1) > .mb-0 > .duration-0 > .max-w-sm > .relative.flex > .flex > .rounded-full > :nth-child(1) > .peer'
    ).click();

    //Click visit cart
    cy.contains('button', 'View Cart').click();
  });

  it('should go to address page and login', () => {
    // Click Proceed to checkout
    cy.contains('button', 'PROCEED TO CHECKOUT').click();
  });

  //   it('should login', () => {
  //     // Type correct email & password
  //     cy.get('#email').type('g@h.com');
  //     cy.get('#password').type('123456');

  //     // Click Sign In
  //     cy.contains('button', 'Sign In').click();

  //     //Preceed to checkout
  //     cy.contains('button', 'PROCEED TO CHECKOUT').click();
  //   });

  it('should add new address', () => {
    // Enter new address
    cy.get('#firstName').type('Sadman');
    cy.get('#lastName').type('Sakib');
    cy.get('#contact').type('01755384902');
    cy.get('#addressLine1').type('17/1, Miapara');
    cy.get('#addressLine2').type('Khulna');
    cy.get('#city').type('Khulna');
    cy.get('#postCode').type('9100');
    cy.get('#tag2').type('Home');

    //Continue to shipping page
    cy.contains('button', 'Continue to shipping').click();
  });

  it('should go to payment page and place order', () => {
    // Click Proceed to checkout
    cy.contains('button', 'Continue to payment').click();

    //select payment method
    cy.get('#paymentMethod').select('Credit card');

    //input credit card data
    cy.get('#cardNumber').type('123456');
    cy.get('#nameOnCard').type('Sadman');
    cy.get('#expirationDate').type('2025-11');
    cy.get('#securityCode').type('1234');

    //Proceed to order
    cy.contains('button', 'Pay now').click();
  });

  it('should go to order list and show order details', () => {
    //expand menu
    cy.get('.border-gray-700 > .h-7').click();

    //go to order list
    cy.contains('Orders').click({ force: true });

    //close sidebar
    cy.get('.h-10 > path').click();

    //show order details
    cy.contains('Details').click();
  });
});

export {};
