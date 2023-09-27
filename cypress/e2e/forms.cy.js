describe('Form Page Spec', () => {
    
    beforeEach(()=>{
        cy.visit('/forms')
    })
    
    it('Subscribe Form Test', ()=>{
        
        cy.contains(/testing forms/i)
        cy.get('[data-item="subscribe-form"]').find('input').as('subscribe-input')
        cy.contains(/Successfully subbed: alimujtaba@gmail.com!/i).should('not.exist')
        cy.get('@subscribe-input').type('alimujtaba@gmail.com')
        cy.get('[data-item="subscribe-button"]').click()
        cy.contains(/Successfully subbed: alimujtaba@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: alimujtaba@gmail.com!/i).should('not.exist')
        
        cy.contains(/Invalid email: alimujtaba@gmail.io!/i).should('not.exist')
        cy.get('@subscribe-input').type('alimujtaba@gmail.io')
        cy.get('[data-item="subscribe-button"]').click()
        cy.contains(/Invalid email: alimujtaba@gmail.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: alimujtaba@gmail.io!/i).should('not.exist')
        
        cy.contains(/fail!/i).should('not.exist')
        cy.get('[data-item="subscribe-button"]').click()
        cy.contains(/fail!/i).should('exist')
        cy.wait(3000)
        cy.contains(/fail!/i).should('not.exist')
    })
    
})