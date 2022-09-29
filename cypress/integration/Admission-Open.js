class Admission
{

openurl()
{
   return cy.visit("https://www.vsijaipur.com/ca-course-fees-in-india/")
}

enteryourname()
{

return cy.get(".textwidget input[placeholder='Your Full Name Here']")
}

enteryouemailid()
{
    return cy.get(".textwidget .wpcf7 .wpcf7-form-control-wrap input[name='your-email']")

}

enteryoucontactno()
{
    return cy.get(".textwidget .wpcf7 .wpcf7-form-control-wrap input[name='tel-173']")
}

selectclassmode()
{
    return cy.get(".textwidget .wpcf7 .wpcf7-form-control-wrap select[name='classmode']")
}

selectcourse()
{
    return cy.get(".textwidget .wpcf7 .wpcf7-form-control-wrap select[name='Subject']") 
}

entermessage()
{
    return cy.get(".textwidget .wpcf7 .wpcf7-form-control-wrap textarea[name='message-227']") 
}
yesiaminterested()
{
    return cy.get(".textwidget .wpcf7 .form-group.text-center.mb-0 input[type='submit']") 
}
matchingtext()
{
    //return cy.get('.wpcf7-form.sent .wpcf7-response-output')
 //   return cy.get('#wpcf7-f22440-o3 > .wpcf7-form > .wpcf7-response-output')
   return cy.get('.textwidget .wpcf7 .wpcf7-response-output')
}
}

export default Admission