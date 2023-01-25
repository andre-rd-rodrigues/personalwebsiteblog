describe("Homepage", () => {
  it("renders page correctly", () => {
    cy.visit("/");

    // Renders title
    cy.get("h1")
      .contains(/curiosity gem/i)
      .should("be.visible");

    // Renders subtitle
    cy.findByText(/Uncover hidden gems of knowledge. Stay curious./i).should(
      "be.visible"
    );

    // Renders cta
    cy.findByRole("button", { name: /start reading/i }).should("be.visible");

    // Renders first section
    cy.findByText(/latest:/i).should("be.visible");
  });
});
