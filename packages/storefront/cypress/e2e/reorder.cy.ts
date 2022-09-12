describe('Place re-order of previous order', () => {
  before(function () {
    cy.fixture('customer').then(function (userCredentials) {
      this.userCredentials = userCredentials;
    });
  });

  function clickReorderButton() {
    cy.get('#reorderModalMessage')
      .invoke('text')
      .then((text) => {
        if (
          text === 'SOME PRODUCTS ARE NOT AVAILABLE. DO YOU WISH TO CONTINUE?'
        ) {
          cy.contains('button', 'Yes').click();
          clickReorderButton();
        } else if (
          text ===
          'YOUR ITEMS IN THE CART WILL BE REPLACED. DO YOU WANT TO CONTINUE?'
        ) {
          cy.contains('button', 'Yes').click();
        }
      });
  }

  it('should reorder', function () {
    cy.viewport(1024, 868);
    cy.visit('/');
    cy.login(this.userCredentials.email, this.userCredentials.password);
    cy.wait(1000);

    cy.get('#user-name').click();

    cy.contains('li', 'Orders').click({ force: true });
    cy.contains('a', 'View').click();
    cy.contains('button', 'Reorder').click();
    clickReorderButton();
    cy.url().should('eq', Cypress.config().baseUrl + '/cart');
  });
  // it('should go to the Order Page', () => {
  //   // cy.get('#sidebar-close').click();
  // });
  // it('should go to the Order Page', () => {
  //   cy.wait(1500);
  //   cy.contains('span', 'Details').click();
  // });
  // it('should select reorder option', () => {
  //   cy.wait(1500);
  //   cy.contains('button', 'Reorder').click();
  // });
  // it('should take decisions for reorder and proceed to cart page', () => {
  //   cy.wait(1500);
  //   cy.contains('button', 'Yes').click();
  // });
  // it('should proceed to checkout', () => {
  //   cy.wait(1500);
  //   cy.contains('button', 'PROCEED TO CHECKOUT').click();
  // });
  // it('should add a new address', () => {
  //   cy.get('#firstName').type('Himel B');
  //   cy.get('#lastName').type('ABC');
  //   cy.get('#contact').type('0133332212');
  //   cy.get('#addressLine1').type('Mirpur');
  //   cy.get('#addressLine2').type('Gram');
  //   cy.get('#city').type('Dhaka');
  //   cy.get('#postCode').type('1234');
  //   cy.get('#tag2').type('Other');
  //   cy.contains('button', 'Continue to shipping').click();
  //   cy.contains('button', 'Continue to payment').click();
  //   cy.contains('button', 'Pay now').click();
  // });
});

export {};
