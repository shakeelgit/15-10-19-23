
describe("Gmail Account",()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    it("To open Gmail Sign",()=>{
        cy.visit("www.google.com")
        
    })

})