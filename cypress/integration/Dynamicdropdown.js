/// <reference types='cypress' />

describe("To Verify Dynamic Dropdown Button",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

      
    it('To open airindia website and verify from dropdown button',()=>{

     cy.visit("www.airindia.in")
     cy.get("input[id='from']").type('a')
     cy.get("#ui-id-2").find('.ui-menu-item').each((el,index, list)=>{
        const a = el.text()
        cy.log(a)
     if(a==='Agra, Kheria Airport, AGR, India')
     {
        cy.wrap(el).click()
     }
    
    })

})
     it('verify To dropdown button',()=>{
           
      cy.get("input[id='to']").type('ber')  
      cy.get('#ui-id-3').find('.ui-menu-item').each((el, index, list)=>{
        const b = el.text()
        if(b==='Berlin, Berlin Tegel Airport, TXL, Germany')
        {
            cy.wrap(el).click()
        }
      })
     })
    
   
    
})