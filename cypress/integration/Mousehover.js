/// <reference types ="cypress" />

describe("Open Airindia Website and Verify Mouse hover functionality",()=>{
   

    it("Verify Mouse hover functionality ",()=>{
    
    cy.visit("www.airindia.in")
    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })
    cy.contains('Manage').invoke('show')
    
                                                      
    
    })
    
    
    
    })
    