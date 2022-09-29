/// <reference types = "cypress" />
describe("Med",()=>{
    it("Test-01",()=>{
   cy.visit("http://test.memss.co.uk/Home/Index")
   cy.get(':nth-child(1) > .form-control').type("assetadmin@outlook.com")
   cy.get('#password').type("Test@123")  
   cy.get('.btn').click()
   cy.get('.side-menu > :nth-child(1) > :nth-child(1)').should('be.visible').click({force:true}).then(()=>{    cy.get(".btn.btn-default").should('be.visible').click({force:true})
   })
    cy.get('#A_12').click({force:true})
    cy.get("#select2-assetManufacturerId_create-container").click()
    cy.get("input[role='searchbox']").type("9003-Colpol")
   cy.get('#navbar-header-content').click()
   cy.get('#AssetQuickSearchModal > .modal-dialog > form > .modal-content > .modal-body > .row > .col-sm-9 > .form-group > #AssetNumber').type('1')
   cy.get("#AssetQuickSearchModal input[type='submit']").click()
    })
})