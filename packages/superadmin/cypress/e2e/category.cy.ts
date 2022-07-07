describe('Login to superadmin & view category', () => {
  it('should visit add category', () => {
    // Start from the index page
    cy.visit('/');
    cy.login('nafi@test.com', '123456');
    cy.get('.bi-list').click();

    cy.contains('span', 'Catalog').click();
    cy.wait(1000);
    cy.contains('div', 'Categories').click();
    cy.wait(1000);
    cy.contains('button', 'Add').click();
    cy.wait(1000);
  });

  it('should fill category form & save', () => {
    cy.get('#name').type('Mobile2');
    cy.get('#description').type('Feature mobile & smartphone');
    cy.get('#published').check();
    cy.contains('button', 'Save').click().as('createCategory');
    cy.get('@createCategory');
  });
});

export {};
