/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.get('#login').click();
  cy.get('#email').type(email);
  cy.get('#password').type(password);

  cy.intercept({ method: 'POST', url: '**/signin' }).as('loginResponse');
  cy.contains('button', 'Sign In').click();
  cy.wait('@loginResponse').then(({ request, response }) => {
    expect(response?.statusCode === 200);
  });

  cy.url().should('eq', Cypress.config().baseUrl + '/');

  //   cy.get('.Toastify__close-button').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('#user-name').click();

  cy.contains('li', 'Logout')
    .click()
    .should(() => {
      expect(localStorage.getItem('persist:root')).to.be.null;
    });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      logout(): Chainable<void>;
      //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      //   dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

// const COMMAND_DELAY = 2000;

// for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains', 'url']) {
//     Cypress.Commands.overwrite(command, (originalFn, ...args) => {
//         const origVal = originalFn(...args);

//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(origVal);
//             }, COMMAND_DELAY);
//         });
//     });
// }

export {};
