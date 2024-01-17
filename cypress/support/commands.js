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
import adminPageSelector from "../fixtures/selectorsAdminPage.json";

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

Cypress.Commands.add("clickOpenButton", () => {
  if (adminSelector.textContain == "Все готово к открытию") {
    cy.get(adminSelector.openingButton).click();
    cy.contains("Продажа билетов открыта!!!").should("be.visible");
  } else {
    cy.contains("Продажа билетов открыта!!!").should("be.visible");
  }
});

Cypress.Commands.add("addHall", () => {
  if (adminPageSelector.addedHall == "Красивый зал") {
    cy.get(":nth-child(5) > a > .conf-step__button").click();
  }

  cy.get(adminPageSelector.createHallButton).click();
  cy.get(adminPageSelector.AddNameHall).type("Красивый зал");
  cy.get(adminPageSelector.AddNameButton).click();
  cy.contains("Красивый зал").should("be.visible");
});
