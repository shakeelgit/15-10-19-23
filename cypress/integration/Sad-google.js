/*///<reference types="cypress" />     1

describe("Enter any test on google",()=>{   1

  it("To open google websit",()=>{    1

    cy.visit("https://www.google.com")1
    cy.get("input[class='gLFyf gsfi']").type("Ayesha Coaching Classes")1
    cy.get("input[jsaction='paste:puy29d;']").type("Shakeel Khan")
   cy.get('input.gLFyf').type("Aurangabad")
  cy.get("input[name='q']").type("SAARAH")
  cy.get("input[type='text']").type("Sidrah")
  cy.get("input[aria-autocomplete='both']").type("Sadiya")
     cy.get("div[class='FPdoLc lJ9FBc'] input[class='gNO89b']").click({force:true})
  })


}) */ 1
///<reference types="cypress/">
describe("Enter any test on google",()=>{
  it("To open google website",()=>{
    cy.visit("https://www.google.com")
   // cy.get("input[class='gLFyf gsfi']").type("Ayesha Coaching Classes")

  })
})


