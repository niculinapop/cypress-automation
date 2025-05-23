describe('Security - Locked user login', () => {
  it('should not allow login for locked_out_user', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out');
  });
});
