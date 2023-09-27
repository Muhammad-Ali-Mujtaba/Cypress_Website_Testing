describe('Fundamentals spec', () => {
  
  beforeEach( () => {
    cy.visit('/fundamentals')
  })
  
  it('Header Title Test', () => {
    cy.getDataItem('Fundamentals Header').should('contain', 'Testing Fundamentals')
    //cy.get('[data-test="Fundamentals Header"]').should('contain', 'Testing Fundamentals')
    
  })
  
  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    
  })
  
})
