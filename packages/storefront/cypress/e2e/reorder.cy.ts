describe('Login to storefront & view checkout', () => {
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
    cy.get('#email').type('demo1@gmail.com');
    cy.get('#password').type('123456789');

    // Click login
    cy.contains('button', 'Sign In').click();

    //close sidebar
    cy.get('.h-10 > path').click();
  });
  it('should go to the Order Page', () => {
    cy.wait(1500);
    //go to order Page
    cy.get('#menu-icon').click();
    cy.get('#user-name');
    // it('hovers', () => {
    // });
    cy.contains('li', 'Orders').click({ force: true });
    cy.get('#sidebar-close').click();
  });
  it('should go to the Order Page', () => {
    cy.wait(1500);
    cy.contains('span', 'Details').click();
  });
  it('should select reorder option', () => {
    cy.wait(1500);
    cy.contains('button', 'Reorder').click();
  });
  it('should take decisions for reorder and proceed to cart page', () => {
    cy.wait(1500);
    cy.contains('button', 'Yes').click();
  });
  it('should proceed to checkout', () => {
    cy.wait(1500);
    cy.contains('button', 'PROCEED TO CHECKOUT').click();
  });
  it('should add a new address', () => {
    cy.get('#firstName').type('Himel B');
    cy.get('#lastName').type('ABC');
    cy.get('#contact').type('0133332212');
    cy.get('#addressLine1').type('Mirpur');
    cy.get('#addressLine2').type('Gram');
    cy.get('#city').type('Dhaka');
    cy.get('#postCode').type('1234');
    cy.get('#tag2').type('Other');
    cy.contains('button', 'Continue to shipping').click();
    cy.contains('button', 'Continue to payment').click();
    cy.contains('button', 'Pay now').click();
  });
});

export {};
