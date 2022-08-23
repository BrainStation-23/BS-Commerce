describe('Login to storefront', () => {
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
    //close Toast
    cy.get('.Toastify__close-button').click();
  });

  it('should have empty compare list', () => {
    cy.wait(1500);
    //open nav bar
    cy.get('#menuToggler  ').click();
    cy.wait(1500);
    // cy.get('#NavProfileDiv').invoke('show');
    //click comparision
    cy.contains('Comparision').click({ force: true });
    cy.wait(500);
    //check empty comparision list
    cy.get('.Toastify__toast-body > :nth-child(2)').should(
      'have.text',
      'Comparision list is empty.'
    );
    cy.wait(1500);

    //close Toast
    cy.get('.Toastify__close-button').click();
  });
  it('should be able to add to compare', () => {
    cy.wait(1500);
    //add 1 product to compare
    cy.get(
      ':nth-child(3) > .col > :nth-child(1) > .mb-0 > .duration-0 > .max-w-sm > .relative.flex > .flex > .rounded-full > :nth-child(4) > .peer'
    ).click();

    //check empty comparision list
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should(
      'have.text',
      'Eggplant' //enter 3rd product name from trending products
    );
    cy.wait(1500);
    //Close modal
    cy.get('.border-1 > .block').click();
    cy.wait(1500);
  });

  it('should have 1 item in compare list', () => {
    cy.wait(1500);
    //open nav bar
    cy.get('#menuToggler  ').click();
    cy.wait(1500);
    //click comparision
    cy.contains('Comparision').click({ force: true });
    cy.wait(500);
    //check item in comparision list
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should(
      'have.text',
      'Eggplant' //enter 3rd product name from trending products
    );
    cy.wait(1500);

    //Close modal
    cy.get('.border-1 > .block').click();
    cy.wait(1500);
  });

  it('should remove 1 item from compare list', () => {
    cy.wait(1500);
    //open nav bar
    cy.get('#menuToggler  ').click();
    cy.wait(1500);
    // cy.get('#NavProfileDiv').invoke('show');
    //click comparision
    cy.contains('Comparision').click({ force: true });
    cy.wait(500);
    //remove item comparision list
    cy.get('tr > :nth-child(2) > button').click();
    cy.wait(1500);
  });

  it('should have empty compare list', () => {
    cy.wait(1500);
    //open nav bar
    cy.get('#menuToggler  ').click();
    cy.wait(1500);
    //click comparision
    cy.contains('Comparision').click({ force: true });
    cy.wait(500);
    //check empty comparision list
    cy.get('.Toastify__toast-body > :nth-child(2)').should(
      'have.text',
      'Comparision list is empty.'
    );
    cy.wait(1500);

    //close Toast
    cy.get('.Toastify__close-button').click();
  });

  it('should remove 1st product from compare list when 4 products added', () => {
    cy.wait(1500);
    //add 1 product to compare
    cy.get(
      ':nth-child(1) > .col > :nth-child(1) > .mb-0 > .duration-0 > .max-w-sm > .relative.flex > .flex > .rounded-full > :nth-child(4) > .peer'
    ).click();

    //Close modal
    cy.get('.border-1 > .block').click();

    //add 2 product to compare
    cy.get(
      ':nth-child(2) > .col > :nth-child(1) > .mb-0 > .duration-0 > .max-w-sm > .relative.flex > .flex > .rounded-full > :nth-child(4) > .peer'
    ).click();

    //Close modal
    cy.get('.border-1 > .block').click();

    //add 3 product to compare
    cy.get(
      ':nth-child(3) > .col > :nth-child(1) > .mb-0 > .duration-0 > .max-w-sm > .relative.flex > .flex > .rounded-full > :nth-child(4) > .peer'
    ).click();

    //Close modal
    cy.get('.border-1 > .block').click();

    //add 4 product to compare
    cy.get(
      ':nth-child(4) > .col > :nth-child(1) > .mb-0 > .duration-0 > .max-w-sm > .relative.flex > .flex > .rounded-full > :nth-child(4) > .peer'
    ).click();

    //1st product should be replaced by 2nd one
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should(
      'have.text',
      'Broccoli ' //enter 2nd product name from trending products
    );
    cy.wait(1500);
    //Close modal
    cy.get('.border-1 > .block').click();
    cy.wait(1500);
  });
});

export {};
