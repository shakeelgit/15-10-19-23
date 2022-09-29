/// <reference types ="cypress" />

describe("Open Airindia Website and Verify Static Drop down functionality",()=>{
   

it("Verify Static Drop down button ",()=>{

cy.visit("www.airindia.in")
Cypress.on('uncaught:exception',(err, runnable)=>{
    return false
})
cy.get("select[id='ddladult1']").select("2").should('have.value','2')
cy.get("select[id='ddlchildren1']").select("7").should('have.value','7')
cy.get("select[id='ddlinfants1']").select('8').should('have.value','8')

cy.get("select[id='concessionaryType1']").select("Student").should('have.value','Student')

cy.get("select[id='_classType1']").select("Economy").should('have.value','Economy')

                                                  

})



})
