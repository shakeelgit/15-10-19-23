///<reference types='cypress'/>
describe("Test suite", () => {
    
    it("handle drop down and dynamic dropdown in airIndia site enter in from text field", () => {

        cy.visit('www.airindia.in/')
        Cypress.on('uncaught:exception',(err, runnable)=>{
            return false
        })
        cy.get('ul[class="navbar-right"] li[class="nav-item"]').find('a[class="nav-link"]').invoke('removeAttr', 'target').click()
        
        cy.get('button[id="next"]').click()
    })
})
