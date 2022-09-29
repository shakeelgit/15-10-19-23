


describe("Amazon Website Testing",()=>{

    it("To open Amazon websit",()=>{
    
        cy.visit("www.amazon.in")
    
     //   cy.get('#nav-flyout-ya-signin').click()//invoke('show');
        //click hidden element
        cy.contains('Sign').click({force:true});
    })
    
    })