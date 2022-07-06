describe('Login to superadmin & view category', () => {
  it('should be redirected to login page', () => {
    // Start from the index page
    cy.visit('/');
  });

  it('should login', () => {
    // Type correct email & password
    cy.get('#email').type('nafi@test.com');
    cy.get('#password').type('123456');
    // cy.get('.btn').click();

    // Click login
    cy.contains('button', 'LOG IN').click();

    cy.url().should('eq', Cypress.config().baseUrl + '/');

    // Close success toast
    cy.get('.Toastify__close-button').click();
  });

  it('should logout', () => {
    // Click logout
    // cy.contains('span', 'Logout').click();

    cy.contains('span', 'Logout')
      .click()
      .should(() => {
        expect(localStorage.getItem('persist:root')).to.be.null;
      });
  });

  it('should show wrong credentials message', () => {
    // Type incorrect email & password
    cy.get('#email').type('nafi8@test.com');
    cy.get('#password').type('123456');

    // Click login
    cy.contains('button', 'LOG IN').click();

    // Close toast
    cy.get('.Toastify__close-button').click();
  });

  it('should clear input fields & login', () => {
    // Clear email & password field
    cy.get('#email').clear();
    cy.get('#password').clear();

    // Type correct email & password
    cy.get('#email').type('nafi@test.com');
    cy.get('#password').type('123456');

    // Click login
    cy.contains('button', 'LOG IN').click();

    // Close toast
    cy.get('.Toastify__close-button').click();
  });

  it('should scroll down & up', () => {
    cy.scrollTo('bottom');
    cy.wait(1500);
    cy.scrollTo('top');
    cy.wait(1500);
  });

  it('should expand & collapse sidebar', () => {
    cy.get('.bi-list').click();
    cy.wait(2000);
    cy.get('.bi-list').click();
  });

  it('should go to categories view page', () => {
    cy.get('.bi-list').click();

    cy.contains('span', 'Catalog').click();
    cy.wait(1000);
    cy.contains('div', 'Categories').click();
    cy.wait(2000);
    cy.contains('button', 'View').click();
    cy.wait(1500);
    // cy.contains('div', 'Products').click();
  });

  // it('should add a new product', () => {
  //   cy.contains('.btn', 'Add new');
  // });
});

export {};
