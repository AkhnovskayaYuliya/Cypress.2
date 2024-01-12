// ***********************************************
// This example commands.js shows you how to
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

import adminSelector from "../fixtures/selectorsLoginAdmin";
import pageSelector from "../fixtures/selectorsMainPage";

Cypress.Commands.add("login", (email, password) => {
  cy.get(adminSelector.email).type(email);
  cy.get(adminSelector.password).type(password);
  cy.contains("Авторизоваться").click();
});

Cypress.Commands.add("bookSeats", (row, seat) => {
  cy.get(
    `.buying-scheme__wrapper > :nth-child(${row}) > :nth-child(${seat})`
  ).click();
});
