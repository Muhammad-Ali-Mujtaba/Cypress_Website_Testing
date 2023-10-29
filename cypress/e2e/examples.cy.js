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
    
    it('Intercepts', () => {

        cy.visit('/examples')

        cy.intercept('POST', 'http://localhost:3000/examples', {
           fixture: 'example.json'
        })
        
        cy.get('[data-test="examples-button"]').click()
        
    
    })
    
    it.only('Grudge List', ()=> {
        //Testing grudge list form functionality
        cy.visit("/examples")
        cy.contains(/add some grudges/i)
        
        cy.get('[data-test="grudge-list"]').within(()=> {
            cy.get('li').should('have.length', 0)
        })
        cy.get('[data-test="clear-button"]').should('not.exist')
        
        cy.get('[data-test="grudge-input"]').within(() =>{
            cy.get("input").type("Some major grudge")
            
        })
        cy.get('[data-test="grudge-button"]').click()
          
        cy.get('[data-test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 1)
        })
        cy.get('[data-test="clear-button"]').should('exist')

        
        cy.get('[data-test="grudge-input"]').within(() =>{
            cy.get("input").type("Second grudge 2")
            
        })
        cy.get('[data-test="grudge-button"]').click()
          
        cy.get('[data-test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 2)
            cy.get('li').its(1).should('contain.text', "Second grudge 2")
        })
        
        cy.get('[data-test="grudge-list"]').within(()=>{
            cy.get('li').its(0).within(()=> {
                cy.get('button').click()
            })
        })
        
        cy.get('[data-test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 1)
        })
        
        cy.get('[data-test="clear-button"]').click()
        cy.get('[data-test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 0)
        })
        
    })

})