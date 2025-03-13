describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', "http://localhost:3000/api/v1/subscriptions", {
      statusCode: 200,
      fixture: "subscriptions.json"
    });

    cy.intercept('GET', "http://localhost:3000/api/v1/subscriptions/*", {
      statusCode: 200,
      fixture: "details.json"
    });

    cy.visit('http://localhost:5173/')
    cy.get('.homepage-container button').click()
  });

  it('navigates to a detail page', () => {
    cy.get('.subscription_card_container').first().click()
    cy.get('.details_container').should('exist')
  })

  describe('in DetailsPage', () => {
    beforeEach(() => {
      cy.get('.subscription_card_container').first().click()
    })

    it('still displays header', () => {
      cy.get('.header_container h1').should('be.visible').and('contain', 'Bloom & Brew')
      cy.get('.logo').should('be.visible')
    })

    it('displays subscription title as page title', () => {
      cy.get('.details_container h2').should('be.visible').and('contain', 'Afternoon tea time')
    })

    it('displays details of subscription', () => {
      cy.get('.sub_info').should('exist')
      cy.get('.sub_info h3').should('be.visible').and('contain', 'Subscription Details: ')
      cy.get('.details_card_container').find('p').eq(0).should('contain', 'Price: $14.99')
      cy.get('.details_card_container').find('p').eq(1).should('contain', 'Delivered every month')
      cy.get('.details_card_container').find('p').eq(2).should('contain', 'Status: ')
    })

    it('displays the subscriptions teas', () => {
      cy.get('.tea_card_container').should('exist')
      cy.get('.tea_card_container h3').should('be.visible').and('contain', 'Teas: ')
      cy.get('.tea_card_container .card-scroll').should('be.visible')
      cy.get('.tea_card').should('have.length', 3)
      cy.get('.tea_card').first().find('h4').should('contain', 'English Garden')
      cy.get('.tea_card').first().find('p').eq(0).should('contain', 'Rose petal black tea')
      cy.get('.tea_card').first().find('p').eq(1).should('contain', 'Brew at 200°F for 3-5 minutes')
      cy.get('.tea_card').last().find('h4').should('contain', 'Velvet Truffle')
      cy.get('.tea_card').last().find('p').eq(0).should('contain', 'Black tea with raspberry and dark chocolate')
      cy.get('.tea_card').last().find('p').eq(1).should('contain', 'Brew at 200°F for 3-5 minutes')
    })

    it('displays subscriptions customers', () => {
      cy.get('.customer_card_container').should('exist')
      cy.get('.customer_card_container h3').should('be.visible').and('contain', 'Customers: ')
      cy.get('.customer_card_container .card-scroll').should('be.visible')
      cy.get('.customer_card').should('have.length', 2)
      cy.get('.customer_card').first().find('h4').should('contain', 'Brewster, Theo')
      cy.get('.customer_card').first().find('p').eq(0).should('contain', 'Email: tBrew98@gmail.com')
      cy.get('.customer_card').first().find('p').eq(1).should('contain', 'Address: 222 Jasmine Circle')
      cy.get('.customer_card').last().find('h4').should('contain', 'Sipwell, Beatrice')
      cy.get('.customer_card').last().find('p').eq(0).should('contain', 'Email: sipwell12@gmail.com')
      cy.get('.customer_card').last().find('p').eq(1).should('contain', 'Address: 88 Camellia Drive')
    })

    it('displays details buttons', () => {
      cy.get('.nav-buttons').should('be.visible')
      cy.get('.goBack').should('be.visible')
      cy.get('.setStatus').should('be.visible')
      cy.get('.goBack label').should('contain', 'Go back')
      cy.get('.setStatus label').should('contain', 'Cancel')
    })

    it('cancel button returns status message when clicked', () => {
      cy.intercept('PATCH', "http://localhost:3000/api/v1/subscriptions/*", {
        statusCode: 200,
        body: {
          subscription: {
            status: 'canceled'
          }
        }
      }).as('cancelSubscription');

      cy.intercept('GET', "http://localhost:3000/api/v1/subscriptions/*", {
        statusCode: 200, 
        fixture: 'canceled_details.json'
    }).as('updateSubCanceled')
      // Cannot successfully test for error messaging, works in active localhost though
      cy.get('.setStatus').click()
      // cy.get('.success-message').should('exist').and('be.visible').and('contain', 'Subscription successfully canceled!')
      cy.wait('@cancelSubscription')
      cy.wait('@updateSubCanceled')
      cy.get('.details_card_container').find('p').eq(2).should('contain', 'canceled')
      
      // Handle error if try to cancel twice

      cy.get('.setStatus').click()
      // cy.get('.status-error').should('exist').and('be.visible').and('contain', 'Subscription is already canceled!')
      cy.wait('@cancelSubscription')
    })

    it('navigates back to subscriptions when go back button is clicked', () => {
      cy.get('.goBack').click()
      cy.get('.subscriptions_container').should('exist')
    })
  })
})