Feature: Student Admission Form

Scenario: To verify the Admission For Student

Given I open Vijay website
And   Enter the full name
And   Enter your email
And   Enter you contact number
And   Select the offline and online mode
And   Select the course
And   Enter the message in the text box
When  I click on yes I am interested button
Then  Thank for your message string getting displayed
