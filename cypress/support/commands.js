// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("SelectCourse",(String)=>{
    cy.get('tr td:nth-child(1)').each((el, index, list)=>{
        const str = el.text()
        if(str.includes(String))
        {
         cy.get('tr td:nth-child(1)').eq(index).next().then((price)=>{
           const priceText = price.text()
         cy.log(priceText)
          // expect(priceText).to.equal('₹2,000')
         })
           
         
         
        }
     
       })

})

/*-------------------------------------Price----------------------------*/


Cypress.Commands.add("SelectFees",(Pstring)=>{
  cy.get('tr td:nth-child(2)').each((el, index, list)=>{
      const str = el.text()
      if(str.includes(Pstring))
      {
       cy.get('tr td:nth-child(2)').eq(index).prev().then((String)=>{
         const priceText = String.text()
       cy.log(priceText)
        // expect(priceText).to.equal('₹2,000')
       })
         
       
       
      }
   
     })

})


/*--------------------------------------------Adding 3 Items in Add To Cart And Verify it-------------*/

Cypress.Commands.add("Addchoice",(choice)=>{
  cy.get("#twotabsearchtextbox").type(choice) 
  cy.get("#nav-search-submit-button").click()
})
  Cypress.Commands.add("Additem",(item1,item2)=>{
    cy.get(".s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row").find(".a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal").each((el,index,list)=>{
      const a = el.text()
      //cy.log(a)  
        if(a.includes(item1,item2))
        {
          cy.wait(4000)
              cy.wrap(el).invoke('removeAttr','target').should("be.visible").click({force:true}).then(()=>{
                cy.get('#add-to-cart-button').click().then(()=>{
                  cy.get('.a-price.sw-subtotal-amount .a-offscreen').then((element)=>{
                    const actualtext = element.text()
                //    cy.log(actualtext)
            var num1 = Number(actualtext.replace(/[^0-9\.-]+/g,""))
          //    expect(num1).to.equal(num1)
          
             
              cy.log(num1)         
          
                        
      
                  })
            
                })
                         })
        }
      })
    })
      /*  Cypress.Commands.add("Additem2",(item2)=>{
          cy.get(".s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row").find(".a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal").each((el,index,list)=>{
            const a = el.text()
        //cy.log(a)  
        if(a.includes(item2))
        {
        //    cy.wait(1000)
            cy.wrap(el).invoke('removeAttr','target').click().then(()=>{
                cy.get('#add-to-cart-button').click().then(()=>{
                  cy.get('.a-price.sw-subtotal-amount .a-offscreen').then((element)=>{
                    const actualtext = element.text()
                 //   cy.log(actualtext)
            var num2 = Number(actualtext.replace(/[^0-9\.-]+/g,""))
             
         //      cy.log(num2)      
             
  //     expect(num2).to.equal(num2)
                  })
            
                })
                         })
        }
    })
  
 
  })
*/


  Cypress.Commands.add("Additem3",(item3)=>{
    cy.get(".s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row").find(".a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal").each((el,index,list)=>{
      const a = el.text()
     // cy.log(a)  
  if(a.includes(item3))
  {
      //cy.wait(1000)
      cy.wrap(el).invoke('removeAttr','target').click().then(()=>{
          cy.get('#add-to-cart-button').click().then(()=>{
            cy.get('.a-price.sw-subtotal-amount .a-offscreen').then((element)=>{
              const actualtext = element.text()
     //         cy.log(actualtext)
      var num3 = Number(actualtext.replace(/[^0-9\.-]+/g,"")).then(()=>{
        expect(num3).to.equal(num3)
      })
       
           // cy.log(num)                       
    
            })
      
          })
                   })
  }
})



})







  
//--------------------------------------------------------------------------------
  
Cypress.Commands.add("facebookLogin", (email, password) => {
    //adding a new command named customLogin
    cy.get("#email").type(email);
    cy.get("#pass").type(password);
    cy.get('[data-testid="royal_login_button"]').click()
  });


  Cypress.Commands.add("CityName",(name)=>{
    cy.get("input[id='from']").type('a')
    cy.get('#ui-id-2').find('.ui-menu-item').each((el,index, list)=>{
        const a = el.text()
       /*cy.log(a*/
        if(a===name)
        {
            cy.wrap(el).click()
        }
        
        })
        
        })
  