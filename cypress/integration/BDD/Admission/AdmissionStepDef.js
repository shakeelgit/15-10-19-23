
import { And, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Admission from "../../Admission-Open"
const ad = new Admission();

Given ("I open Vijay website",function(){
    ad.openurl()
})

And ("Enter the full name",function(){

    ad.enteryourname().type(this.data.YourFullName)
})

And ("Enter your email",function(){
    ad.enteryouemailid().type(this.data.YourEmailHere)
})

And  ("Enter you contact number",function(){
    ad.enteryoucontactno().type(this.data.YourContactNo)
})


And("Select the offline and online mode",function(){
    ad.selectclassmode().select(this.data.Option1)
})

And("Select the course",function(){
    ad.selectcourse().select(this.data.Subjects)
})

And("Enter the message in the text box",function(){
    ad.entermessage().type(this.data.Message)
})

When("I click on yes I am interested button",function(){
    ad.yesiaminterested().click({force:true})
})

Then("Thank for your message string getting displayed",function(){
    ad.matchingtext().then((el)=>{
        const a = el.text()
        cy.log(a).should('have.text',"Thank you for your message. It has been sent.")
})
})