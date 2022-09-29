/// <reference types='cypress' />

describe("To Verify checkboxes and check and uncheck",()=>{

    it('To open irctc.co.in ',()=>{

     cy.visit("www.irctc.co.in")
     cy.get('.btn').should('be.visible').click({force:true})
     cy.get('#concessionBooking').check({force:true})
     .should('be.checked')
     cy.get('.ui-button').click()
     cy.get('#dateSpecific').check({force:true})
     .should('be.checked')
     cy.get('#availableBerth').check({force:true})
     .should('be.checked')
     cy.get('#passBooking').check({force:true})
     .should('be.checked')
     cy.get('.ui-button').eq(0).click()
     cy.get('#concessionBooking').should('not.be.checked')

    })


})