/// <reference types ="cypress" />



describe("Handling Webtable",()=>{
   var data
 before(()=>{

    cy.fixture('example').then((fdata)=>{
        data=fdata;
    })
    })
      it("Handling Webtable Information Using Parametrizing Test Data",()=>{
      cy.visit("https://www.vsijaipur.com/ca-course-fees-in-india/")
      /*cy.SelectCourse("CA Foundation Exam Form");
      cy.SelectCourse("Articleship Fee");   
      cy.SelectCourse("CA Final") */
     // this.data.course
      data.course.forEach((element)=> { 

        cy.SelectCourse(element) 
      });
    
    })
    })
