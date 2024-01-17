import login from "../../fixtures/loginData";
import adminSelector from "../../fixtures/selectorsAdminPage";
describe("Add hall", () => {
  it("Should add hall", () => {
    cy.visit("/");
    cy.login(login.validEmail, login.validPassword);
    cy.contains("Управление залами").should("be.visible");
    cy.addHall();
  });
});
