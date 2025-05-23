describe('Security - XSS injection attempt', () => {
  it('should not execute injected script in username', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('<script>alert("XSS")</script>');
    cy.get('#password').type('somepassword');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
});
