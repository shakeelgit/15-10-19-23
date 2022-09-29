/// <reference types ="cypress" />


describe("Handling Webtable",()=>{
   
it("Handling Webtable Information",()=>{
  cy.visit("https://www.vsijaipur.com/ca-course-fees-in-india/")
  cy.SelectCourse("CA Foundation Exam Form");
  cy.SelectCourse("Articleship Fee");
  cy.SelectCourse("CA Final")

   
})
})