import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given ('I open amazon page',()=>{
    cy.visit("www.amazon.in") 
})

//And adding choice
And('Adding the choice',()=>{
    cy.get('#twotabsearchtextbox').type("watches for men")
    cy.get("#nav-search-submit-button").click()
})

And('Clicking on the Product',()=>{

    cy.get(".s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row").find(".a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal").each((el,index,list)=>{
        const a = el.text()
        //cy.log(a)
        if(a.includes("Wired Collection Analog Slim Watch for Man with Color Variant, Wrist Watches for Men, with Classy Wired Mesh Band - GD4061"))
        {
            cy.wait(1000)
            cy.wrap(el).invoke('removeAttr','target').click().then(()=>{
                cy.get('#add-to-cart-button').click()
            })
        }
    })
})


Then('Validate the total price',()=>{
    cy.get('.a-price.sw-subtotal-amount .a-offscreen').then((element)=>{
        const actualtext = element.text()
        var number = Number(actualtext.replace(/[^0-9\.-]+/g,""));
       expect(number).to.equal(4098)
})

})