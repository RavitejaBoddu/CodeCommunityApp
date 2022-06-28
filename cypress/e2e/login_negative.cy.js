describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("checks with incorrect password", () => {
    cy.get("#email").type("test@test.com");

    cy.get("#pass").type("123456");

    cy.get("#login").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("wrong password");
    });
  });

  it("checks with incorrect email", () => {
    cy.get("#email").type("test@test.com");

    cy.get("#pass").type("123456");

    cy.get("#login").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("user not found");
    });
  });
});
