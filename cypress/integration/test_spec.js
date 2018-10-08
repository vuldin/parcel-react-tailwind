describe('My First Test', function() {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('green alert', () => {
    const element = () => cy.get('.bg-green-lightest')
    it('should exist', () => {
      element().should.exist
    })
    it('has correct title', () => {
      element().contains('Ok!')
    })
    it('has correct message', () => {
      element().contains('Everything is good.')
    })
    context('at desktop size', () => {
      it('has correct width', () => {
        element().should('have.css', 'width', '992px')
      })
    })
    context('at mobile size', () => {
      beforeEach(() => {
        cy.viewport('iphone-6')
      })
      it('has correct width', () => {
        element().should('have.css', 'width', '375px')
      })
    })
  })
  describe('card', () => {
    const element = () => cy.get('#card')
    it('has correct heading', function() {
      element().contains('Coldest Sunset')
    })
    describe('at desktop size', () => {
      it('has correct width', () => {
        element().should('have.css', 'width', '480px')
      })
    })
  })
})
