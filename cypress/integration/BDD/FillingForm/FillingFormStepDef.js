import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import Admission from "../../Admission-Open";
const ad = new Admission();
Given ("I open CA website",function(){
    ad.openurl()
})

And ("Enter Full Name",function(){
    ad.enteryourname().type(this.data.YourFullName)
})

And ("Enter Email Id",function(){
    ad.enteryouemailid().type(this.data.YourEmailHere)
})

And("Enter Contact Number",function(){
    ad.enteryoucontactno().type(this.data.YourContactNo)
})

And("Select Class Mode option",function(){
    ad.selectclassmode().select(this.data.Option1)
})

And("Select Course",function(){
    ad.selectcourse().select(this.data.Subjects)
})

And("Enter Message",function(){
    ad.entermessage().type(this.data.Message)
})

When("Clicking on Yes I am interested button",function(){
    ad.yesiaminterested().click({force:true})

})

Then ("Verify the string",function(){
   
    ad.matchingtext().then((el)=>{
        const a = el.text()
        cy.wait(10000)
        cy.log(a).should('have.text',"Thank you for your message. It has been sent.")
    })
    
})