describe('UI test', function() {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('green alert', () => {
    it('should exist', () => {
      cy.get('.bg-green-lightest').should.exist
    })
    it('has correct title', () => {
      cy.get('.bg-green-lightest > strong').contains('Ok!')
    })
    it('should have a bold title', () => {
      cy.get('.bg-green-lightest > strong').should('have.class', 'font-bold')
    })
    it('has correct message', () => {
      cy.get('.bg-green-lightest > :nth-child(2)').contains(
        'Everything is good.',
      )
    })
    it('can be removed', async () => {
      await cy
        .get('.bg-green-lightest > :nth-child(3)')
        .click()
        .should('not.exist')
      cy.get('.bg-green-lightest').should('not.exist')
    })
    context('at desktop size', () => {
      it('has correct width', () => {
        cy.get('.bg-green-lightest').should('have.css', 'width', '992px')
      })
    })
    context('at mobile size', () => {
      beforeEach(() => {
        cy.viewport('iphone-6')
      })
      it('has correct width', () => {
        cy.get('.bg-green-lightest').should('have.css', 'width', '375px')
      })
    })
  })
  describe('card', () => {
    it('has correct heading', function() {
      cy.get('#card').contains('Coldest Sunset')
    })
    describe('at desktop size', () => {
      it('has correct width', () => {
        cy.get('#card').should('have.css', 'width', '480px')
      })
    })
  })
})
