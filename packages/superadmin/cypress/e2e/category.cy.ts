describe('Login to superadmin, create & view category', () => {
  it('should visit add category page', () => {
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
  // Generating random value to feed input form
  const uuid = () => Cypress._.random(0, 1e6);
  const id = uuid();
  it('should fill category form & save', () => {
    cy.get('input[name="name"]')
      .type(`Test case #${id}`)
      .should('have.value', `Test case #${id}`);
    cy.wait(1000);
    cy.get('input[name="description"]')
      .type(`Description of test case #${id}`)
      .should('have.value', `Description of test case #${id}`);
    cy.wait(1000);
    // cy.get('select').select('Electronics').should('have.value', `electronics`);
    cy.wait(1000);
    cy.get('input[name="published"]').check();
    cy.wait(1000);
    cy.get('input[name="meta.title"]')
      .type(`Meta title #${id}`)
      .should('have.value', `Meta title #${id}`);
    cy.wait(1000);
    cy.get('input[name="meta.description"]')
      .type(`Meta description #${id}`)
      .should('have.value', `Meta description #${id}`);
    cy.wait(1000);
    cy.get('input[name="meta.keywords"]')
      .type('best keywords tech')
      .should('have.value', `best keywords tech`);
    cy.wait(1000);
    cy.get('input[name="meta.SEFN"]')
      .type(`Meta SEFN #${id}`)
      .should('have.value', `Meta SEFN #${id}`);

    cy.contains('button', 'Save').click();
    // cy.get('@createCategory');
  });
});

export {};
