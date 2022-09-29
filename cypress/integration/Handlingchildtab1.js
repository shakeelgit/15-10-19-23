
/// <reference types ="cypress" />

describe("Open AirIndia website and verify the child tab functionality",()=>{
    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })
it("Verify child tab using cypress automation tool",()=>{
  cy.visit("www.airindia.in")
 // cy.contains("Login").invoke('removeAtrr','target').click()

 cy.get('.d-flex.my-2.my-lg-0 .tata-brand').invoke('removeAttr','target').click()
 cy.contains('Watch Film').click()
})


})