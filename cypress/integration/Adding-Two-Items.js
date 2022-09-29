///<reference types="cypress" />

describe("Verify the price of the product",()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
        var data
        before(()=>{
        cy.fixture('table').then((fdata)=>{
        data=fdata;
        })
        })
    
        it("To veriy the price",()=>{
    
            cy.visit("www.amazon.in")
            cy.Addchoice(data.selectthechoice)
            cy.Additem(data.item1)
            cy.Addchoice(data.selectthechoice)
            cy.Additem(data.item2)
           
            
            
        })
    })

