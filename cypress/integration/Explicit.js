<ul class="connectors-list">
  <li>Walk the dog</li>
  <li>Feed the cat</li>
  <li>Write JavaScript</li>
</ul>


cy.get('.connectors-list > li').should(($lis) => {
    expect($lis).to.have.length(3)
    expect($lis.eq(0)).to.contain('Walk the dog')
    expect($lis.eq(1)).to.contain('Feed the cat')
    expect($lis.eq(2)).to.contain('Write JavaScript')
  })

  cy.get(class).should('have.value', 'walk the dog')