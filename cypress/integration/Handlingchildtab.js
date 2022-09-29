/// <reference types ="cypress" />

describe("Open AirIndia website and handling child tab functionality",()=>{
    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })
it("Handling Child Tab Functionality",()=>{
  cy.visit("www.airindia.in")
cy.contains("Login").invoke('removeAttr','target').click()
//cy.get('#pcode1').type('')
//cy.get('.d-flex.my-2.my-lg-0 .tata-brand').invoke('removeAttr','target').click()


})

})