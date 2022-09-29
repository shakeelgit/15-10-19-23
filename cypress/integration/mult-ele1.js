/// <reference types = "cypress" />

describe("abc",()=>{

    it("ab",()=>{


        cy.visit("www.flipkart.com")
        const menuLinksText =[

            "Top Offer",
            "Grocery",
            "Mobile",
            "Fashion",
            "Electronics",

        ]

        cy.get('.eFQ30H').each((item,index,list)=>{
            expect(list).to.ihave.length(9)
         //   expect(list).to.contain(menuLinksText[index])
        })
    })




})