describe('Login to superadmin & view Manufacturer', () => {
  it('should be redirected to login page', () => {
    // Start from the index page
    cy.visit('/');
  });

  it('should login', () => {
    // Type correct email & password
    cy.get('#email').type('string@gmail.com');
    cy.get('#password').type('string');
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
    cy.get('#email').type('string@gmail.com');
    cy.get('#password').type('string');

    // Click login
    cy.contains('button', 'LOG IN').click();

    // Close toast
    cy.get('.Toastify__close-button').click();
  });

  //   it('should clear input fields & login', () => {
  //     // Clear email & password field

  //     cy.get('#email').clear();
  //     cy.get('#password').clear();

  //     // Type correct email & password
  //     cy.get('#email').type('string@gmail.com');
  //     cy.get('#password').type('string');

  //     // Click login
  //     cy.contains('button', 'LOG IN').click();

  //     // Close toast
  //     cy.get('.Toastify__close-button').click();
  //   });

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

  it('should go to Manufacturer list page', () => {
    cy.get('.bi-list').click();

    cy.contains('span', 'Catalog').click();
    cy.wait(1000);
    cy.contains('div', 'Manufacturers').click();
    cy.wait(2000);
  });

  it('should add a new manufacturer', () => {
    cy.wait(1500);
    cy.contains('a', 'Add new').click();
    cy.wait(1500);
    cy.contains('div', 'Manufacturer Info').click();
    cy.wait(1000);
    cy.get('#name').type('Reverrass324343');
    cy.wait(1000);
    cy.get('#description').type('A Noteworthy Manufactuer ');
    cy.wait(1000);
    cy.get('#picture').type(
      'https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig9_ef67d26b-f717-4bf3-82ec-5eae9aad5a11_1024x1024.jpg?v=1587984831 '
    );
    cy.wait(1000);
    cy.get('#isPublished').check();
    cy.wait(1000);
    cy.contains('div', 'Display Order').click();
    cy.wait(1000);
    cy.get('input[type="number"]').type('3');
    cy.wait(1000);
    cy.contains('div', 'SEO').click();

    cy.get('#metaKeyword').type('Random Keyword');
    cy.wait(1000);
    cy.get('#metaDescription').type('Random Description');
    cy.wait(1000);
    cy.get('#metaTitle').type('Random Title');
    cy.wait(1000);
    cy.get('#seftn').type('Random SEFTN');
    cy.wait(1000);
    cy.contains('button', 'Save').click();
    cy.wait(1000);

    cy.get('.Toastify__close-button').click();
  });
  it('should View a Single Manufactuer', () => {
    cy.contains('button', 'View').click();
    cy.wait(1000);
    cy.contains('a', 'Back to Manufacturer list').click();
    cy.wait(2000);
  });
  it('should Edit a Single Manufactuer', () => {
    cy.contains('button', 'Edit').click();
    cy.wait(2000);
    cy.contains('div', 'Manufacturer Info').click();

    cy.wait(1000);
    cy.get('#name').type('Hasibb-N');
    cy.wait(1000);
    cy.contains('button', 'Save').click();
    cy.wait(1000);
    cy.get('.Toastify__close-button').click();
  });
  it('should Delete a Single Manufactuer', () => {
    cy.contains('button', 'Delete').click();
    cy.wait(2000);
    cy.get('#deleteModal').click();
    cy.get('.Toastify__close-button').click();

    cy.wait(1000);
  });
});

export {};
