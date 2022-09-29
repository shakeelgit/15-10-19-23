
class Poker{
    openpokerwebsite()
    {
        cy.visit("https://www.pokerstars.uk/sports/")
    }
    enterbet1()
    {
       return cy.get('#event-selection-5595488169 > .button__bet__odds').click({force:true})
    }
       clickonacceptallcookies()
    {
        return cy.get('#onetrust-accept-btn-handler').click()
    }
   enterbet2()
   {
         return cy.get('#event-selection-5595559226 > .button__bet__odds').click({force:true})
   }
       verifycounting()
   {
      return cy.get("#betslip__betCounter").find("div[class*=betCounter--animate-up]").should('have.length',2)
        }
     verifycountingafterremoving()
     {
       return cy.get("#betslip__betCounter").find("div[class*=betCounter--animate-up]").should('have.length',0)
       }
}

export default Poker