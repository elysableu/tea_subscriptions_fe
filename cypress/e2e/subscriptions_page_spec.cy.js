describe('subscriptionsPage', () => {
  beforeEach(() => {
    cy.intercept('GET', "http://localhost:3000/api/v1/subscriptions", {
      statusCode: 200,
      fixture: "subscriptions.json"
    });

    cy.visit('http://localhost:5173/')
  });

  it('navigates in subscriptions page', () => {
    cy.get('.homepage-container button').click()
  })

  describe('on subscriptionPage', () => {
    beforeEach(() => {
      cy.get('.homepage-container button').click()
      cy.get('.subscriptions_container').should('exist')
    })

    it('still displays header', () => {
      cy.get('.header_container h1').should('be.visible').and('contain', 'Bloom & Brew')
      cy.get('.logo').should('be.visible')
    })

    it('displays page title', () => {
      cy.get('.subscriptions_container h2').should('be.visible').and('contain', 'Subscriptions')
    })

    it('displays all subscriptions', () => {
      cy.get('.subscription_card_container').should('have.length', 2)
      cy.get('.subscription_card_container').first().find('h3').should('contain', 'Afternoon tea time')
      cy.get('.subscription_card_container').first().find('p').eq(0).should('contain', 'Price per Box: $14.99')
      cy.get('.subscription_card_container').first().find('p').eq(1).should('contain', 'Delivered every month')
      cy.get('.subscription_card_container').first().find('p').eq(2).should('contain', 'Status: ')

      cy.get('.subscription_card_container').last().find('h3').should('contain', 'Around the World')
      cy.get('.subscription_card_container').last().find('p').eq(0).should('contain', 'Price per Box: $24.99')
      cy.get('.subscription_card_container').last().find('p').eq(1).should('contain', 'Delivered every two months')
      cy.get('.subscription_card_container').last().find('p').eq(2).should('contain', 'Status: ')
    })

    it('navigates back to homepage when logo is clicked', () => {
      cy.get('.logo').click()
      cy.get('.homepage_container').should('exist')
    })
  })
})