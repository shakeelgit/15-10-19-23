import { And, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Poker from "../../PokerPOM"


const po = new Poker();
Given("PokerStar is launched",()=>{
  po.openpokerwebsite()
})
When ("User adds the bet1 to the betslip",()=>{
po.enterbet1()
})
And ("User adds the bet2 to the betslip",()=>{
    po.enterbet2()
}) 
Then ("The bet/s are added to the betslip",()=>{
    po.verifycounting()
})