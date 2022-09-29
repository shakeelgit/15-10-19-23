///<reference types = 'cypress' />

describe("Sum of products",()=>{
    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })
    it("To verify sum of products",()=>{

        cy.visit("www.amazon.in")
        cy.get('#twotabsearchtextbox').type("watches for men")
        cy.get("#nav-search-submit-button").click()
        cy.get(".s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row").find(".a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal").each((el,index,list)=>{
            const a = el.text()
            cy.log(a)  
            if(a.includes("Analog Blue Dial Men's Watch-TW000T310"))
            {
                cy.wait(1000)
                cy.wrap(el).invoke('removeAttr','target').click().then(()=>{
                    cy.get('#add-to-cart-button').click().then(()=>{
                        cy.get('.a-price.sw-subtotal-amount .a-offscreen').then((element)=>{
                       
                            const actualtext = element.text()
                            cy.log(actualtext)
                            var number = Number(actualtext.replace(/[^0-9\.-]+/g,""));
                           expect(number).to.equal(3199)
                            
                    })
                  
                })
                
            })
            }
       
    })
            
       
        })
    })




 