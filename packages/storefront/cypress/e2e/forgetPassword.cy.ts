describe('Forget Password Journey', () => {
    it('should be redirected to forget password page', () => {
      // Start from the index page
      cy.visit('/account/sign-in');
      cy.get('#forgotPasswordDiv').click();
      cy.url().should('eq', Cypress.config().baseUrl + '/account/forget-password');
    });
  });
  
  export {};
  