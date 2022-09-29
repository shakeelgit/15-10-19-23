describe('Each-Iterator',()=>{

    it("Test-01",()=>{
    
     cy.visit("www.flipkart.com")
     cy.get("._3qX0zy").then((el)=>{
           cy.log(el.text())
     })
  
    
    })
    
    })
    