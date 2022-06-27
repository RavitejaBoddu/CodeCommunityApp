describe('My First Test', () => {
  it('evaluates Login', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email')
    .type('test@test.com')

    cy.get('#pass')
    .type('12345678')

    cy.get('#login').click()

    cy.get('#user_Email').contains( 'test@test.com')

    cy.get('#logout-btn').click()

  })
})
