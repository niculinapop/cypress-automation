describe('Deleting a product from cart', () => {
  it('should remove the product from the cart', () => {
    cy.visit('https://www.saucedemo.com/', {timeout : 30000});
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button', { timeout: 10000 }).should('be.visible').click();
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.xpath('//*[@id="shopping_cart_container"]/a').click();
    cy.get('#remove-sauce-labs-backpack').click();

    cy.get('#remove-sauce-labs-backpack').should('not.exist');
    
  })
})