/// <reference types ='cypress'/>




describe("To Datepicker",()=>{

    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })



it("To open airindia website and verify datepicker",()=>{

cy.visit('www.airindia.in')
cy.get('#id_1').eq(0).click()
cy.get('#ui-datepicker-div').find('.ui-state-default').each((el,index,list)=>{

    const a =el.text();
    if(a==='12')
    {
        cy.wrap(el).click()
    }
})




}) 

})