/// <reference types ='cypress'/>
describe("Learning Hooks", () => {
    before( function () {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      const a = 10+20
       cy.log(a)
      cy.log("before");

      });
    after(function () {
        cy.visit("https://www.google.com")
        const a = 10+50
        cy.log(a)
      cy.log( "after" );
    });
    beforeEach(function () {
        const a = 10+10
        cy.log(a)
      cy.log("before each" );
    });
    afterEach(function () {
        const a = 10+10
        cy.log(a)
      cy.log("after each" );
    });
    it("should visit the page", () => {
      cy.log("1st IT block");
      cy.visit("www.airindia.com");
    });
    it("dummy block", () => {
      cy.log("2nd IT block");
      
    });
  });