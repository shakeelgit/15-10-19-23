

describe("To open Facebook",()=>{
    
        
                 
   it('Login Facobook Account without using fixutre',()=>{

    cy.visit("https://www.facebook.com")
    cy.get('#email').type('ktest871@gmail.com')        
    cy.get('#pass').type('abcd12345!')
    cy.get('[data-testid="royal_login_button"]').click()

   
   })


})