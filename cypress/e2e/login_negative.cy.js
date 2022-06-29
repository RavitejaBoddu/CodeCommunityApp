describe("login using wrong credentials", () => {
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
    cy.get("#email").type("test@test.co");

    cy.get("#pass").type("12345678");

    cy.get("#login").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("user not found");
    });
  });

  it("Login without entering email", () => {
    cy.visit("http://localhost:3000/");

    cy.get('#login').click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Please enter the email");
    });
  });

  it("Login without entering password", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#email").type("test@test.com");
    cy.get('#login').click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Please enter the password");
    });
  });

});