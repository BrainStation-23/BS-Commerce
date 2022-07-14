describe('Login to superadmin & view category', () => {
  it('should be redirected to login page', () => {
    // Start from the index page
    cy.visit('/');
  });

  it('should login', () => {
    cy.get('#email').type('a@b.com');
    cy.get('#password').type('123456');

    // Click login
    cy.contains('button', 'LOG IN').click();

    cy.url().should('eq', Cypress.config().baseUrl + '/');

    // Close success toast
    cy.get('.Toastify__close-button').click();
  });

  it('should go to admin list page', () => {
    cy.get('.bi-list').click();

    cy.contains('span', 'Users').click();
    cy.wait(1000);
    cy.contains('div', 'Admins').click();
    cy.wait(1000);
  });

  it('should add new user', () => {
    cy.contains('a', 'Add New').click();
    cy.wait(1000);

    cy.get('#firstName').type('Latest');
    cy.get('#lastName').type('User');
    cy.get('#email').type('user@gmail.com');
    cy.get('#password').type('123456');

    //click save
    cy.contains('button', 'Save').click();
    cy.wait(1000);
    cy.get('.Toastify__close-button').click();

    cy.contains('a', 'back to').click();
  });

  it('should go to & edit admin info', () => {
    cy.contains('button', 'Edit Info').click();
    cy.wait(1000);
    cy.contains('button', 'Customer info').click();
    cy.wait(1000);

    cy.get('#firstName').clear().type('New');
    cy.get('#lastName').clear().type('User');

    //click save
    cy.contains('button', 'Save').click();
    cy.get('.Toastify__close-button').click();
  });

  it('should go to & change password', () => {
    cy.contains('button', 'Edit Password').click();
    cy.wait(1000);

    cy.contains('button', 'Customer info').click();
    cy.wait(1000);

    cy.get('#password').type('123456');
    cy.get('#newPassword').type('asdfgh');

    //click save
    cy.contains('button', 'Save').click();
    cy.get('.Toastify__close-button').click();
  });
});

export {};
