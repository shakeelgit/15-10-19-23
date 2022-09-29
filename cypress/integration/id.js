describe("Test suite",()=>{

it("To open facebook page",()=>{

    cy.visit("www.facebook.com");
    cy.get('[id="email"]').type("abc@gmail.com");
    cy.get('#passContainer').type('abc123');
})


})