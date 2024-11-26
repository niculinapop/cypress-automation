describe('Complete checkout process', () => {
  it('should successfully complete the checkout and place the order', () => {
    cy.visit('https://www.saucedemo.com/', {timeout : 30000});
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button', { timeout: 10000 }).should('be.visible').click();
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.xpath('//*[@id="shopping_cart_container"]/a').click();
    cy.get('#checkout').click();
    cy.get('#first-name').type('Niculina');
    cy.get('#last-name').type('Pop');
    cy.get('#postal-code').type('445100');
    cy.get('#continue').click();
    cy.get('#finish').click();

    cy.xpath('//*[@id="checkout_complete_container"]/h2').should('have.text', 'Thank you for your order!');
    
    
  })
})