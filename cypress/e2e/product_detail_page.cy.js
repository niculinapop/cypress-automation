describe('Verify access after clicking on a product', () => {
  it('should navigate to the product detail page when clicking on a product', () => {
    cy.visit('https://www.saucedemo.com/', {timeout : 30000});
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button', { timeout: 10000 }).should('be.visible').click();
    cy.xpath('//*[@id="item_4_title_link"]/div').click();
    
    cy.get('#back-to-products').should('be.visible');
  })
})