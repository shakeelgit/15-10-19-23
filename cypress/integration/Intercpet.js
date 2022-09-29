describe ("API Testing",()=>{

    it("GET",()=>{
        cy.intercept('GET', 'https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal("Michael")
        })
    })

                 it("Post-create user",()=>{

                    var user = {
                     "name" : "Rama",
                     "job" : "Student"

               //   "name": "morpheus",
               //     "job": "leader"
                    }

      cy.intercept('POST', "https://reqres.in/api/users",user).then((response)=>{

      expect(response.status).equal(201)
     expect(response.body.name).equal(user.name)
      expect(response.body.job).equal(user.job)

      })

                 })


    it("Put-Update",()=>{
        var user1={
            "name" : "GEETA",
            "job" : "Student"
        }

cy.intercept("PUT", "https://reqres.in/api/users/2",user1).then((response)=>{
    expect(response.status).equal(200)
    expect(response.body.name).equal(user1.name)
    expect(response.body.job).equal(user1.job)
})

    })



    it("Delete user",()=>{
        cy.intercept("DELETE","https://reqres.in/api/users/2").then((response)=>{
            expect(response.status).equal(204)
        })
    })



})