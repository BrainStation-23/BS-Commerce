function makeid(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 describe('Trying to sign up with an existing user', () => {
    it('should be redirected to sign-up page', () => {
        cy.viewport(1024, 972)
        cy.visit('/');
        cy.get('#registerbtn').click();
      });

  it('should show "user already exits" toast using existing user email', () => {
    cy.get('#username').type('test@gmail.com');
    cy.get('#toggle-btn').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/account/sign-up');

    //cy.get('.Toastify__close-button').click();
  });
});

describe('Sign up a new user', () => {
    it('should be redirected to sign-up page', () => {
        cy.viewport(1024, 972)
        cy.visit('/');
        cy.get('#registerbtn').click();
      });

  it('should create e new user and redirect to sign-in page', () => {
    cy.get('#username').type(makeid(6) + "@gmail.com");
    // cy.get('#otp').type('123');
    cy.get('#toggle-btn').click();
    cy.get('#name').type('New User');
    cy.get('#password').type('123456');

    cy.contains('button', 'Sign Up').click();
    cy.wait(1500);

    cy.url().should('eq', Cypress.config().baseUrl + '/account/sign-in');

    //cy.get('.Toastify__close-button').click();
  });
});

export {};
