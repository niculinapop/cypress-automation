describe('Security - SQL Injection attempt', () => {
  it('should not login using SQL injection pattern', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type("' OR '1'='1");
    cy.get('#password').type("' OR '1'='1");
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
}); 
