describe('Each-Iterator',()=>{

it("Test-01",()=>{

 cy.visit("www.flipkart.com")
 cy.get('._37K3-p').find('._3YgSsQ').each((el, index, list)=>{
    const item = el.find('._3LU4EM').text()
    if(item.includes('Jewellery Set'))
    {
        cy.wrap(el).find('a').click() 
 
    }
 })
})

})


