
///<reference types="cypress"/>

describe("To open the google",()=>{

    it("Test case -01- To open google website",()=>{

        cy.visit("https://www.google.com")
       // cy.get("input[class='gLFyf gsfi']").type("Hello")
       //cy.get("input[jsaction='paste:puy29d;']").type("Google")
      // cy.get("input[maxlength='2048']").type("India")
        cy.get(".gLFyf.gsfi").type("India")
      //cy.get(".FPdoLc.lJ9FBc .gNO89b").click({force:true})
     // cy.get(".FPdoLc.lJ9FBc .RNmpXc").click({force:true})
     //cy.get(".FPdoLc.lJ9FBc .RNmpXc").invoke('show').click({force:true})

    })
})



