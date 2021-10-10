describe('UI test', function () {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('green alert', () => {
    it('should exist', () => {
      cy.get('.bg-green-300').should.exist
    })
    it('has correct title', () => {
      cy.get('.bg-green-300 > strong').contains('Ok!')
    })
    it('should have a bold title', () => {
      cy.get('.bg-green-300 > strong').should('have.class', 'font-bold')
    })
    it('has correct message', () => {
      cy.get('.bg-green-300 > :nth-child(2)').contains('Everything is good.')
    })
    context('at desktop size', () => {
      it('has correct width', () => {
        cy.get('.bg-green-300').should('have.css', 'width', '768px')
      })
    })
    context('at mobile size', () => {
      beforeEach(() => {
        cy.viewport('iphone-6')
      })
      it('has correct width', () => {
        cy.get('.bg-green-300').should('have.css', 'width', '360px')
      })
    })
  })
  describe('card', () => {
    it('has correct heading', function () {
      cy.get('#card').contains('Coldest Sunset')
    })
    describe('at desktop size', () => {
      it('has correct width', () => {
        cy.get('#card').should('have.css', 'width', '384px')
      })
    })
  })
})
