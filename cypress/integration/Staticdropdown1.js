/// <reference types ="cypress" />

describe("Open AirIndia website and verify the static dropdown functionality",()=>{
    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })
it("Verify Adult Static Drop Down Button",()=>{
  cy.visit("www.airindia.in")
cy.get("select[id='ddladult1']").select("4").should('have.value','4')
})

it("Verify Children Static Drop Down Button",()=>{
    cy.get("select[id='ddlchildren1']").select("6").should('have.value',"6")
})

it("To verify Infant static drop down button",()=>{
    cy.get("select[id='ddlinfants1']").select("8").should('have.value',"8")
   
})

it("To verify Concessionary Type static drop down button",()=>{

    cy.get("select[id='concessionaryType1']").select("Student").should("have.value","Student")
})

it("To verify Economy static drop down button",()=>{

    cy.get("select[id='_classType1']").select(" First").should("have.value"," First")
})

})
