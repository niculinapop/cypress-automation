describe('Menu button functionality', () => {
  it('should open and close the side menu', () => {
    cy.visit('https://www.saucedemo.com/', {timeout : 30000});
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button', { timeout: 10000 }).should('be.visible').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('#react-burger-cross-btn').click();
   
    cy.get('#react-burger-menu-btn').should('be.visible');
    
  })
})