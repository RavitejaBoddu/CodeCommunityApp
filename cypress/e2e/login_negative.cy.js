describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email')
    .type('test@test.com')

    cy.get('#pass')
    .type('123456')

    cy.get('#login').click()

    
  })
})