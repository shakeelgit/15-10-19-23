import { And, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I Open Facebook Website page",function(){
    cy.visit("www.facebook.com")
})

And("Clicking on Facebook Registration button",function(){
    cy.get('[data-testid="open-registration-form-button"]').should('be.visible').click({force:true})
})

And("Enter First Name",function(){
    cy.get("input[name='firstname']").type(this.data.firstname)
})

And("Enter Last Name",function(){
    cy.get('input[name="lastname"]').type(this.data.lastname)
})

And("Enter Mobile Number or Email Id",function(){
    cy.get('input[name="reg_email__"]').type(this.data.email)
})

And("Please Re-Enter Your Email Id",()=>{
    cy.get('input[name="reg_email_confirmation__"]').type(data.email)
})
And("Enter New Password",function(){
    cy.get('input[data-type="password"]').type(this.data.newpassword)
})

And("Select Day",function(){
    cy.get('select[id="day"]').select(this.data.day)
})

And('Select Month',function(){
    cy.get("select[name='birthday_month']").select(this.data.month)
})

And("Select Year",function(){
    cy.get("select[id='year']").select(this.data.year)
})

When("Click on Gender as Male",function(){
    cy.get('input[value="2"]').check()
})

Then("Click SignUp Button",function(){
    cy.get('button[name="websubmit"]').click()

})