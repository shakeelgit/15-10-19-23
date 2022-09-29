/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe("Handling Frames",()=>{
    it("Frames Examples",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.frameLoaded('#courses-iframe')
        //cy.iframe().find("a[href*='mentorship']").eq(0).click()
         cy.iframe().find("a[href*='learning']").eq(2).click()
            })
})

