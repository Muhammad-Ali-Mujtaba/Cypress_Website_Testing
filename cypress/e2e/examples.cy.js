describe('Various Examples', () => {

    it('Mutli-page Testing', () => {

        cy.visit('/')

        cy.get('[data-test="nav-overview"]').click()
        cy.location("pathname").should('equal', '/overview')

        cy.get('[data-test="nav-fundamentals"]').click()
        cy.location("pathname").should('equal', '/fundamentals')

        cy.get('[data-test="nav-forms"]').click()
        cy.location("pathname").should('equal', '/forms')

        cy.get('[data-test="nav-examples"]').click()
        cy.location("pathname").should('equal', '/examples')

        cy.get('[data-test="nav-component"]').click()
        cy.location("pathname").should('equal', '/component')

        cy.get('[data-test="nav-practices"]').click()
        cy.location("pathname").should('equal', '/best-practices')


    })


    it.only('Intercepts', () => {

        cy.visit('/examples')

        cy.intercept('POST', 'http://localhost:3000/examples', {
           fixture: 'example.json'
        })
        
        cy.get('[data-test="examples-button"]').click()


    })

})