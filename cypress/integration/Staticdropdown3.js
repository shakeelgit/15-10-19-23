///<reference types="cypress"/>


describe("OPen Airindia website and verify the static dropdown",()=>{

it("Verify static drop down button",()=>{

cy.visit("https://www.airindia.in")
cy.get("select[id='ddladult1']").select("3").should('have.value','3')
cy.get("#ddlchildren1").eq(0).select("5").should('have.value','5')
cy.get("div[class='form-group'] select[class='form-control']").eq(2).select("4").should('have.value','4')

})


})