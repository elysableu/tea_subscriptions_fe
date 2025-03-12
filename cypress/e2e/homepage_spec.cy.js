describe('homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', "http://localhost:3000/api/v1/subscriptions", {
      statusCode: 200,
      fixture: "subscriptions.json"
    });

    cy.visit('http://localhost:5173/')
  });

  it('displays the page title', () => {
    cy.get('.header_container h1').should('be.visible').and('contain', 'Bloom & Brew')
  })

  it('displays the logo', () => {
    cy.get('.logo').should('be.visible')
  })

  it('displays welcome message', () => {
    cy.get('.homepage-container h2').should('be.visible').and('contain', 'Welcome to the admin portal!')
  })

  it('displays the enter portal button', () => {
    cy.get('.homepage-container button').should('be.visible').and('contain', 'Enter portal!')
  })
})