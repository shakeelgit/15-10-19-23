/// <reference types='cypress' />

describe("To Learn Custom Command",()=>{
    
        
                 
    it('Login Facobook Account using custom command',()=>{
 
     cy.visit("https://www.facebook.com")
     cy.facebookLogin("abcded@gmail.com","ABCDEF!!!")
     

   

 
    
    })
 
 
 })