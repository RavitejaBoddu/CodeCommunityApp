const email = "test@test.com";
const password = "12345678";

describe("Test Login Functionality", () => {
  it("evaluates Login with correct credentials", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#email").type(email);

    cy.get("#pass").type(password);

    cy.get("#login").click();

    cy.get("#user_Email").contains(email);

    cy.get("#logout-btn").click();
  });
});
