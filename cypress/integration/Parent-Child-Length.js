///  <reference types ="cypress" />

describe("Verifying Length",()=>{


    it("Test-01",()=>{

        cy.visit("www.flipkart.com")
      cy.get('._2_b_Xk').find('._2LURSF.col.col-4-12').should('have.length',3)
      //ccy.get('._2_b_Xk').find('a').


     

        
        
    
    })
})