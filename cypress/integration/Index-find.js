/// <reference types ='cypress' />
   

describe("To open flipkart website",()=>{

it("To verify the flipkartwebsit",()=>{

    cy.visit('www.flipkart.com')
    cy.get('._2_b_Xk').find("._2LURSF.col.col-4-12").eq(0).click()
})

})

