describe("verify checkboxes",()=>{
    it("To open irctc website and verify the checkboxes",()=>{
           cy.visit("www.irctc.co.in")
            cy.get('.btn').click({force:true})
          
             
                   cy.get('#concessionBooking').check({force:true}).should('be.checked')
                       cy.get('.ui-button-icon-left.ui-clickable.pi.pi-check').click()
                         cy.get('#dateSpecific').check({force:true}).should('be.checked')
  cy.get('#availableBerth').check({force:true}).should('be.checked')
         cy.get('#passBooking').check({force:true}).should('be.checked')
            cy.get('.ui-button-text.ui-clickable').eq(0).click({force:true})
        
             
                //  cy.get('#concessionBooking').check({force:true}).should('be.checked')
                //         cy.get('.ui-button-text.ui-clickable').eq(0).click({force:true})
              
                         cy.get('#concessionBooking').uncheck({force:true}).should('not.be.checked')
                         cy.get('#dateSpecific').uncheck({force:true}).should('not.be.checked')
                         cy.get('#availableBerth').uncheck({force:true}).should('not.be.checked')
                         cy.get('#passBooking').uncheck({force:true}).should('not.be.checked')

                         

  })
  
 
    
})
      
    
