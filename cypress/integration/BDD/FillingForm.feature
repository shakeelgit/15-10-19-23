
Feature: Filling Form Verification

Scenario: To Verify the Form
Given  I open CA website
And Enter Full Name
And Enter Email Id
And Enter Contact Number
And Select Class Mode option
And Select Course
And Enter Message
When Clicking on Yes I am interested button
Then Verify the string
