const userName = "Raviteja";
const email = "raviteja@sample.com";
const password = "12345678";

describe("Test Login Functionality", () => {
//This will automatically fail as the email has been already used for signup.
  it("evaluate signup with correct credentials", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#signup").click();

    cy.get("#uname").type(userName);
    cy.get("#email").type(email);
    cy.get("#pass").type(password);
    cy.get("#pass1").type(password);
    cy.get("#signup-btn").click();

    cy.get("#user_Email").contains(email);
    cy.get("#logout-btn").click();
  });

});
