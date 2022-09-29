
import { And, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I Open AirIndia Website page",()=>{
    cy.visit("www.airindia.in")
})

And("Verify Adult Static Drop Down Button",()=>{
    cy.get("select[id='ddladult1']").select("4").should('have.value','4')
})

And("Verify Children Static Drop Down Button",()=>{
    cy.get("select[id='ddlchildren1']").select("6").should('have.value',"6")
})

And("To verify Infant static drop down button",()=>{
    cy.get("select[id='ddlinfants1']").select("8").should('have.value',"8")
})

And("To verify Economy static drop down button",()=>{
    cy.get("select[id='_classType1']").select(" First").should("have.value"," First")
})

When("When Click On Search Button",()=>{
    cy.get('#btnbooking').click({force:true})
})