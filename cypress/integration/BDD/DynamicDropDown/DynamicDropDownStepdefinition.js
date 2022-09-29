
import { And, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open AirIndia Website",()=>{
    cy.visit("www.airindia.in")
})

When("Enter A Alphabet",()=>{
    cy.get("input[id='from']").type('a')
})

Then("Select the Agra Airport in the dropdown",()=>{
    cy.get("#ui-id-2").find('.ui-menu-item').each((el,index, list)=>{
        const a = el.text()
        cy.log(a)
     if(a==='Agra, Kheria Airport, AGR, India')
     {
        cy.wrap(el).click()
     }
    
    })
})

And("Enter ber Alphabet in the dropdown",()=>{
    cy.get("input[id='to']").type('ber')
})

Then("Select the Berlin Airport in the dropdown",()=>{
    cy.get('#ui-id-3').find('.ui-menu-item').each((el, index, list)=>{
        const b = el.text()
        if(b==='Berlin, Berlin Tegel Airport, TXL, Germany')
        {
            cy.wrap(el).click()
        }
      })
})
