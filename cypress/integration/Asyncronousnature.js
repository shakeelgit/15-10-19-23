describe("Amazon Website Testing",()=>{
    it("To open Amazon websit",()=>{
        cy.visit("www.amazon.in")
        cy.get('.icp-nav-flag.icp-nav-flag-in').should('be.visible').click()
        .then(()=>{
                 })
                    .then(()=>{
    cy.contains('తెలుగు').click()
         })  
        })
    })
