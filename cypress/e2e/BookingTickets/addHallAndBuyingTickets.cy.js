import login from "../../fixtures/loginData";
import adminSelector from "../../fixtures/selectorsAdminPage";
import pageSelector from "../../fixtures/selectorsMainPage";
import seats from "../../fixtures/seats";

describe("Booking tickets admin", () => {
  it("Should book tickets in added hall", () => {
    cy.visit("/");
    cy.login(login.validEmail, login.validPassword);
    cy.contains("Управление залами").should("be.visible");

    cy.get(adminSelector.hallOpening).eq(5).click();
    cy.clickOpenButton();

    cy.visit("https://qamid.tmweb.ru/");
    cy.get(pageSelector.date).last().click();
    cy.get(pageSelector.addedHall).should("have.text", "Мой зал");

    cy.get(pageSelector.timeSessionAddedMovie).click();

    seats.forEach((seats) => {
      cy.bookSeats(seats.row, seats.seat);
    });

    cy.get(pageSelector.bookingButton).click();

    cy.contains("Вы выбрали билеты:").should("be.visible");
  });
});
