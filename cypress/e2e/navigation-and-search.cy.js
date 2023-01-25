describe("Navigation", () => {
  it("homepage navigation", () => {
    cy.visit("/");

    // "START READING" navigates to fist section
    cy.findByRole("button", { name: /start reading/i }).click();
  });
});
