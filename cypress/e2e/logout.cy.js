describe('Logout test-saucedemo', () => {
  it('should display back the login page', () => {
    cy.visit('https://www.saucedemo.com/', {timeout : 30000});
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button', { timeout: 10000 }).should('be.visible').click();
   // cy.get('#login-button').click();
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click();

  //  cy.get('#login_button').should('be.visible');
    
  })
})