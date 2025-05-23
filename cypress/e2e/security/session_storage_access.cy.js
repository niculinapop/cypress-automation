describe('Security - Session storage visibility', () => {
  it('should not expose sensitive info in localStorage', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory');
    cy.window().then((win) => {
      const localKeys = Object.keys(win.localStorage);
      expect(localKeys.length).to.be.greaterThan(0);
      localKeys.forEach((key) => {
        expect(win.localStorage.getItem(key)).to.not.include('password');
      });
    });
  });
});
