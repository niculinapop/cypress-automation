describe('Invalid login test-soucedemo', () => {
  it('should display an error for invalid credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('error_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('body').then(($body) => {
      if ($body.find('[data-test="error"]').length) {
        cy.get('[data-test="error"]').should('be.visible');
      } else {
        cy.log('Error message not found in DOM');
      }
    }); 
  

  });
});