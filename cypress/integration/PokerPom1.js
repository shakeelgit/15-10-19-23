import Poker from "./PokerPOM"
describe("Poker",()=>{
    const po = new Poker();
    it("Add Bet1",()=>{
    po.openpokerwebsite()
    cy.wait(10000)
    po.clickonacceptallcookies()
    po.enterbet1()
    po.enterbet2()
    cy.wait(1000)
    po.verifycounting()
    po.enterbet1()
    cy.wait(3000)
    po.verifycountingafterremoving()
   })
})
