///<reference types="cypress" />

describe("Verify the price of the product",()=>{
Cypress.on('uncaught:exception',(err,runnable)=>{
    return false
})

    it("To veriy the price",()=>{

        cy.visit("www.amazon.in")
        cy.get("#twotabsearchtextbox").type("watches for men")
        cy.get("#nav-search-submit-button").click()
        cy.get('.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row')
        .find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal')
        .each((el,index,list)=>{
            const a = el.text()
            if(a.includes("Wired Collection Analog Slim Watch for Man with Color Variant, Wrist Watches for Men, with Classy Wired Mesh Band - GD4061"))
            {
                cy.wait(1000)
                cy.wrap(el).invoke('removeAttr','target').click().then(()=>{
                    cy.get('#add-to-cart-button').click({force:true})
                   cy.get('.a-price.sw-subtotal-amount')                
               .then((element)=>{
                        const actualtext = element.text()
                        cy.log(actualtext)
                // var num = Number(actualtext.replace(/[^0-9\.-]+/g,""))
                 
                      //  cy.log(num)                       
                 //expect(num).to.equal(849)

                    })

                })
            }
        })
    })
})