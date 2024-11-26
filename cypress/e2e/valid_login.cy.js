describe('Valid login test-saucedemo', () => {
  it('should logged in successfully', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.xpath('//*[@id="shopping_cart_container"]/a').should('be.visible');
  })
})