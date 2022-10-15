///<reference types = "cypress"/>

describe("Open Airindia Website and verify the static dropdown functionality",()=>{

it("verify the static dropdown button",()=>{

cy.visit("https://www.airindia.in/")
Cypres.on('uncaught:exception',(err, runnable)=>{
    return false
})
//cy.get("select[id='ddladult1']").select("2").should('have.value','2')
   cy.get("#ddladult1").eq(0).select("3").should('have.value','3')
   cy.get("select[id='ddlchildren1']").select("7").should('have.value','7')
   cy.get("select[id='ddlinfants1']").select("8").should('have.value','8')



})





})
