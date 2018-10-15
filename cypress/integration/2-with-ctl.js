// cypress has device resolutions pre-defined
// iphone-6, 375x667
// ipad-mini, 768x1024
// macbook-11, 1366x768

describe('UI test', function() {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('green alert', () => {
    const id = '#green-toast'
    const title = 'Ok!'
    const message = 'Everything is good.'
    const removeTitle = 'remove'

    it('exists', () => {
      cy.get('section#notifications').within(() => {
        cy.get(id).should.exist
      })
    })
    it('has correct title', () => {
      cy.get('section#notifications').within(() => {
        cy.get(id).within(() => {
          cy.getByText(title).should.exist
          cy.getByText(title).should('have.class', 'font-bold')
        })
      })
    })
    it('has correct message', () => {
      cy.get('section#notifications').within(() => {
        cy.get(id).within(() => {
          cy.getByText(message).should.exist
        })
      })
    })
    it('has correct remove icon', () => {
      cy.get('section#notifications').within(() => {
        cy.get(id).within(() => {
          cy.getByTitle(removeTitle).click()
        })
        cy.get(id).should('not.exist')
      })
    })

    describe('sizes', () => {
      const alertSizes = [
        { resolution: 'iphone-6', width: '375px' },
        { resolution: 'ipad-mini', width: '768px' },
        { resolution: 'macbook-11', width: '1200px' },
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
        cy.getByText('The Coldest Sunset').should.exist
      })
    })
    it('is centered', () => {
      // testing implementation
      cy.get('main').should('have.class', 'mx-auto')
      cy.get('main > #card').should('have.class', 'self-center')
    })
    describe('sizes', () => {
      const cardSizes = [
        { resolution: 'iphone-6', width: '375px' },
        { resolution: 'ipad-mini', width: '480px' },
        { resolution: 'macbook-11', width: '480px' },
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
