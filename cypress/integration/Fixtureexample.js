/// <reference types='cypress' />

describe("To Learn Fixture",()=>{
    var data;
    before(()=>{
        cy.fixture('example').then((fdata)=>{
            data =fdata;
                   })
                       });

          /*         after(()=>{
                     cy.get('[data-testid="royal_email"]').type(data.email)
                    cy.get('[data-testid="royal_pass"]').type(data.password)
                    cy.get('[data-testid="royal_login_button"]').click()
                  }); */
    it('Login Facobook Account using data situated in fixture ',()=>{

     cy.visit("www.facebook.com")
     cy.get('#email').type(data.email)
     cy.get('#pass').type(data.password)
     cy.get('[data-testid="royal_login_button"]').click()

    
    })


})