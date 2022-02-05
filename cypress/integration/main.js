describe("Matches Tester", () => {
  it("Should play with the buttons to find the right Match", () => {
    cy.visit("/");

    // Test Linux Mint visibility (visible by default)
    cy.get("#testing-mintInfoCard")
      .find("h2")
      .contains("Linux Mint")
      .should("be.visible");

    // Test links for Linux Mint
    cy.get("#testing-mintLinkButton")
      .contains("Learn More on ULOSINO")
      .should("have.attr", "href")
      .and("include", "ulosino.com/browse/mint");

    // Test switching
    cy.get("#testing-switchButton")
      .contains("Switch to macOS style interfaces")
      .click();
    cy.get("#testing-elementaryInfoCard")
      .find("h2")
      .contains("elementary OS")
      .should("be.visible");

    // Test links for elementary OS
    cy.get("#testing-elementaryLinkButton")
      .contains("Learn More on ULOSINO")
      .should("have.attr", "href")
      .and("include", "ulosino.com/browse/elementary");
  });
});
