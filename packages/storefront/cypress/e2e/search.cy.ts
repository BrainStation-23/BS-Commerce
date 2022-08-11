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
    cy.get('#email').type('givemefredom@gmail.com');
    cy.get('#password').type('123456789');

    // Click login
    cy.contains('button', 'Sign In').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');

    //close sidebar
    cy.get('.h-10 > path').click();
  });

  it('should go to the Search Page', () => {
    cy.wait(1500);
    //Go to Login page
    cy.visit('/search');
    //Check for Login page
    cy.url().should('eq', Cypress.config().baseUrl + '/search');
  });

  it('sould be able to search', () => {
    cy.wait(1500);

    //Search for "cab"
    cy.get('#productSearchInput').type('cab');
    //check for "Cabbage"
    cy.get('#searchProductName').should('have.text', 'Cabbage');

    cy.wait(1500);

    //Clear Search
    cy.get('#productSearchInput').clear();
    cy.wait(1500);

    //Search for "tom"
    cy.get('#productSearchInput').type('tom');
    //check for "Tomato"
    cy.get('#searchProductName').should('have.text', 'Tomato');
    cy.wait(1500);

    //Clear Search
    cy.get('#productSearchInput').clear({ force: true });
    cy.wait(1500);

    // cy.get('#searchProductName').click({ force: true });
  });
  it('Product should be functional', () => {

    


    //Click on product to go to product page
    cy.get('#searchProductName').click({ force: true });
    cy.wait(2000);
    //Go back to home page
    cy.visit('/');
  });
});

export {};
