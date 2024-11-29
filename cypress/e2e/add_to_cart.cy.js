const {WEB} = require('../locators/locatorPath');

describe('Adding a product to cart', () => {
  it('should be displayed in cart', () => {
    cy.visit('https://www.saucedemo.com/', {timeout : 30000});
    cy.get(WEB.LOGIN.USERNAME_INPUT).type('standard_user');
    cy.get(WEB.LOGIN.PASSWORD_INPUT).type('secret_sauce');
    cy.get(WEB.LOGIN.LOGIN_BUTTON, { timeout: 10000 }).should('be.visible').click();
    cy.get(WEB.CART.ADD_TO_CART_BUTTON).click();
    cy.xpath(WEB.CART.CART_LINK).click();

    cy.xpath('//*[@id="item_4_title_link"]/div').should('be.visible');
    
  })
})