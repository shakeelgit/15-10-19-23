before(function(){
    cy.fixture('table').then(function(data){
    this.data=data;
    })
    })