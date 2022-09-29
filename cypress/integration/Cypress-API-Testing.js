describe("API Testing",()=>{
    Cypress.config('baseUrl','http://dummy.restapiexample.com/api/v1')
    it("Get - read",()=>{
        cy.request('GET','/employees').then((response)=>{
            expect(response).to.have.property('status','200')
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)
    })


})
it('POST-Create',()=>{
    const item = {"name":"test","salary":"123","age":"23"}
    cy.request('POST','/create',item)
    .its('body')
    .its('data')
 //   .should('deep.eq',item)
 .should('include',{name:'test'})
})


})