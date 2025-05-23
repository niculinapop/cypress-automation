describe('Security - HTML Injection in username field', () => {
  it('should not render HTML as actual tags', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('<b>bold</b>');
    cy.get('#password').type('test');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
});
