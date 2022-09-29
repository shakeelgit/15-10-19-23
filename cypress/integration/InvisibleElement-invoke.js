  
///  <reference types = 'cypress' />

describe("Amazon Website Testing",()=>{

    it("To open Amazon websit",()=>{
    
        cy.visit("www.amazon.in")
         // showing hidden element with invoke
        cy.get('#nav-flyout-ya-signin').invoke('show');
        //clicking hidden element
        cy.contains('Sign').click()
    })
    
    })  


    
    
    


   