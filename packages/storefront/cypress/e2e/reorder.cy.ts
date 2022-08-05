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
    //go to order Page
    cy.get('#menu-icon').click();
    cy.get('#user-name');
    // it('hovers', () => {
    // });
    cy.contains('li', 'Orders').click({ force: true });
    cy.get('#sidebar-close').click();
  });
  it('should go to the Order Page', () => {
    cy.contains('span', 'Details').click();
  });
});

export {};
