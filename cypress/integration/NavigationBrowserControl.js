/// <reference types ="cypress" />

describe("Open AirIndia website and handling child tab functionality",()=>{
    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })
it("Handling Child Tab Functionality",()=>{
  cy.visit("www.airindia.in")
cy.contains("Login").invoke('removeAttr','target').click()
cy.go('back')
cy.url().should('include','airindia')

})
})