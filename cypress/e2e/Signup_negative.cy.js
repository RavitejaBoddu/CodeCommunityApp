describe("Evaluates Signup with incorrect credentials", () => {

    it("Sign-up without entering name", () => {
      cy.visit("http://localhost:3000/");
      cy.get("#signup").click();

      cy.get('#signup-btn').click();
      cy.on("window:alert", (t) => {
        expect(t).to.contains("please enter your firstname");
      });
     
    });

    it("Sign-up without entering email", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#signup").click();
        cy.get("#uname").type("ravi");
    
        cy.get('#signup-btn').click();
        cy.on("window:alert", (t) => {
          expect(t).to.contains("Please enter your email");
        });
       
      });

      it("Sign-up without entering password", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#signup").click();
        cy.get("#uname").type("ravi");
        cy.get("#email").type("test@test.com");
        cy.get('#signup-btn').click();
        cy.on("window:alert", (t) => {
          expect(t).to.contains("please enter the password");
        });
       
      });

      it("Sign-up without entering re-enter password", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#signup").click();
        cy.get("#uname").type("ravi");
        cy.get("#email").type("test@test.com");
        cy.get("#pass").type("12345678");
        cy.get('#signup-btn').click();
        cy.on("window:alert", (t) => {
          expect(t).to.contains("please re-enter the password");
        });
       
      });

      it("Sign-up with incorrect email format", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#signup").click();
        cy.get("#uname").type("ravi");
        cy.get("#email").type("test.com");
        cy.get("#pass").type("12345678");
        cy.get("#pass1").type("12345678");
        cy.get('#signup-btn').click();
        cy.on("window:alert", (t) => {
          expect(t).to.contains("Please enter a valid email address");
        });
       
      });
});