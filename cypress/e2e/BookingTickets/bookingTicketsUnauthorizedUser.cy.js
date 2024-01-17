import pageSelector from "../../fixtures/selectorsMainPage";

describe("Booking tickets unautorized user", () => {
  beforeEach(() => {
    cy.visit("https://qamid.tmweb.ru/");
    cy.get(pageSelector.date).eq(1).click();
    cy.get(pageSelector.timeSessionZootopia).eq(0).click();
  });
  it("Should book vip seat", () => {
    cy.get(pageSelector.VIPSeats).click({ multiple: true });
    cy.get(pageSelector.bookingButton).click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
  });

  it("Try to book unavailable seats", () => {
    cy.get(pageSelector.unavailable).eq(1).click();
    cy.get(pageSelector.bookingButton).should(
      "have.attr",
      "disabled",
      "disabled"
    );
  });
});
