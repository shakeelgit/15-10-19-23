
//<reference types="cyperss"/>


describe("To open google",()=>{


    it("Test case 01",()=>{

        cy.visit("https://www.google.com")
        cy.get("input[class='gLFyf gsfi']").type("India")
        cy.get(".FPdoLc.lJ9FBc input[aria-label='Google Search']").click({force:true})
    })
})