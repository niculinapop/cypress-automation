describe('Back to products button functionality', () => {
  it('should navigate back to homepage', () => {
    cy.visit('https://www.saucedemo.com/', {timeout : 30000});
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button', { timeout: 10000 }).should('be.visible').click();
    cy.xpath('//*[@id="item_4_title_link"]/div').click();
    cy.get('#back-to-products').click();

    cy.xpath('//*[@id="header_container"]/div[2]/div/span/select').should('be.visible');

  })
})