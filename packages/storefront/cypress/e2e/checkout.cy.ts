describe('Login to storefront & view checkout', () => {
  it('should be redirected to login page', () => {
    // Start from the index page
    cy.visit('/account/sign-in');
  });

  it('should login', () => {
    // Type correct email & password
    cy.get('#email').type('demo1@gmail.com');
    cy.get('#password').type('123456789');
    // cy.get('.btn').click();

    // Click login
    cy.contains('button', 'Sign In').click();

    cy.url().should('eq', Cypress.config().baseUrl + '/');

    // Close success toast
    cy.get('.Toastify__close-button').click();
  });
});

export {};
