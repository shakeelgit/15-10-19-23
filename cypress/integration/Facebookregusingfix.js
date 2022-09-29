/// <reference types='cypress' />

describe("To Learn Fixture",()=>{
    var data;
   before(()=>{
       cy.fixture('example').then((fdata)=>{
           data =fdata;
                  })
                      });

            /*      after(()=>{
                    cy.get('[data-testid="royal_email"]').type(data.email)
                   cy.get('[data-testid="royal_pass"]').type(data.password)
                   cy.get('[data-testid="royal_login_button"]').click()
                 }); */
   it('Login Facobook Account using data situated in fixture ',()=>{

    cy.visit("www.facebook.com")
    cy.wait(1000)
  //  cy.get('data-testid="open-registration-form-button"').click()
    cy.get('[data-testid="open-registration-form-button"]').should('be.visible').click({force:true})

                 
    cy.get("input[name='firstname']").type(data.firstname)
    cy.get('input[name="lastname"]').type(data.lastname)
    cy.get('input[name="reg_email__"]').type(data.email)
    cy.get('input[name="reg_email_confirmation__"]').type(data.email)
    cy.get('input[data-type="password"]').type(data.newpassword)
    cy.get('select[id="day"]').select(data.day)
    //cy.get('select[id="month"]').select(data.month)
   cy.get("select[name='birthday_month']").select(data.month)
    cy.get("select[id='year']").select(data.year)
    cy.get('input[value="2"]').check()
    cy.get('button[name="websubmit"]').click()

   
   })
               

})