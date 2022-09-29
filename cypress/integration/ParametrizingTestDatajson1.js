/// <reference types ="cypress" />
describe("Parametrizing the information under the webtable",()=>{
var data;
before(()=>{
    cy.fixture('table').then((fdata)=>{
      data=fdata
    })
})
it("Test-01-Verifying Course Name",()=>{
 cy.visit("https://www.vsijaipur.com/ca-course-fees-in-india/")
 data.course.forEach(element => {
 cy.SelectCourse(element)
 });
})

it.only("Test-02-Verifying Course Fees",()=>{
    cy.visit("https://www.vsijaipur.com/ca-course-fees-in-india/")
    data.Fees.forEach(element => {
    cy.SelectFees(element)
    });
})
})

