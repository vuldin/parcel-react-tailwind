describe('UI test', function () {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('green alert', () => {
    const id = '#green-toast'
    const title = 'Ok!'
    const message = 'Everything is good.'
    const removeTitle = 'remove'

    it('is visible', () => {
      cy.get('section#notifications').within(() => {
        cy.get(id).should('be.visible')
      })
    })
    it('has correct title', () => {
      cy.get('section#notifications').within(() => {
        cy.get(id).within(() => {
          cy.findByText(title).should('be.visible')
          cy.findByText(title).should('have.class', 'font-bold')
        })
      })
    })
    it('has correct message', () => {
      cy.get('section#notifications').within(() => {
        cy.get(id).within(() => {
          cy.findByText(message).should('be.visible')
        })
      })
    })

    describe('sizes', () => {
      const alertSizes = [
        { resolution: 'iphone-6', width: '360px' },
        { resolution: 'ipad-mini', width: '768px' },
        { resolution: 'macbook-11', width: '1280px' },
      ]

      alertSizes.forEach(({ resolution, width }) => {
        it(`has correct width on ${resolution}`, () => {
          cy.viewport(resolution)
          cy.get(id).should('be.visible')
          cy.get(id).should('have.css', 'width', width)
        })
      })
    })
  })

  describe('card', () => {
    it('has correct heading', () => {
      cy.get('main').within(() => {
        cy.findByText('The Coldest Sunset').should.exist
      })
    })
    it('is centered', () => {
      // testing implementation
      cy.get('main').should('have.class', 'mx-auto')
      cy.get('main > #card').should('have.class', 'self-center')
    })
    describe('sizes', () => {
      const cardSizes = [
        { resolution: 'iphone-6', width: '360px' },
        { resolution: 'ipad-mini', width: '384px' },
        { resolution: 'macbook-11', width: '384px' },
      ]

      cardSizes.forEach(({ resolution, width }) => {
        it(`has correct width on ${resolution}`, () => {
          cy.viewport(resolution)
          cy.get('main').should('be.visible')
          cy.get('main').should('have.css', 'width', width)
        })
      })
    })
  })
})
