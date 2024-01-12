import selector from "../fixtures/selectorsMainPage"


describe("Site for buying movie tickets", () => {
  it("Main page display", () => {
    cy.visit("https://qamid.tmweb.ru/client/index.php");
    cy.get(selector.date).should("have.length", 7);
    cy.get(selector.header).should("contain", "Идём");
  });
});
