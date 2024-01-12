import login from "../fixtures/loginData";
import selector from "../fixtures/selectorsLoginAdmin"

describe("log in admin", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Администраторррская").should("be.visible");
  });

  it("Should login successfully", () => {
    cy.login(login.validEmail, login.validPassword);
    cy.contains("Управление залами").should("be.visible");
  });

  it("Should not login", () => {
    cy.login(login.invalidEmail, login.invalidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Log in with empty email", () => {
    cy.login(" ", login.validPassword)
    cy.get(selector.email)
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  })

  it("Log in with empty password", () => {
    cy.login(login.validEmail, " ");
    cy.contains("Ошибка авторизации!").should("be.visible");
  })
});
