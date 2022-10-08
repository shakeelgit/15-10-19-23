
/// <reference types ="Cypress"/>

describe("To learn locators using tagname",()=>{


    it("To open google page",()=>{
        cy.visit("https://www.google.com")
        //cy.get("input[class*='gLFyf']").type("Cypress Tutorial") 
        cy.get(".gLFyf.gsfi").type("India")
       // cy.get("input[type='submit']").eq(2).click({force:true})
     //  cy.xpath("//body/div[1]/div[3]/form[1]/div[1]/div[1]/div[2]/div[2]/div[5]/center[1]/input[1]").click({force:true})
       //cy.xpath("//a[contains(text(),'हिन्दी')]").click({force:true})
       //cy.get('[href="https://www.google.com/setprefs?sig=0_RpimXAacKPc3bfqieDL2CCSQLzA%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwibv9nH5MD6AhWWAN4KHeUsCwoQ2ZgBCBE"]').click({force:true})
        // cy.get("a[href]").eq(8).click({force:true})
        cy.contains("Google Search").click({force:true})




    })
})




