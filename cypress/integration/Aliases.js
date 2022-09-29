

///<reference types = "cypress" />


describe("Learning Aliases in cypress",()=>{

    it("Open google",()=>{

        cy.visit("www.google.com");
        cy.get('.gLFyf').as('textbox')
        cy.get('@textbox').type("India")
        cy.get('.FPdoLc > center > .gNO89b').as('googlesearch')
        cy.get('@googlesearch').click({force:true})
    })
})