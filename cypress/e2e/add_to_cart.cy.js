describe('Adding a product to cart', () => {
  it('should be displayed in cart', () => {
    cy.visit('https://www.saucedemo.com/', {timeout : 30000});
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button', { timeout: 10000 }).should('be.visible').click();
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.xpath('//*[@id="shopping_cart_container"]/a').click();

    cy.xpath('//*[@id="item_4_title_link"]/div').should('be.visible');
    
  })
})