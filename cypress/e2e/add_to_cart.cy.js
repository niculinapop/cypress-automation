const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Adding a product to cart', () => {
  it('should be displayed in cart', async () => {
    await Login.login();
    cy.get(WEB.CART.ADD_TO_CART_BUTTON).click();
    cy.xpath(WEB.CART.CART_LINK).click();

    cy.xpath(WEB.PRODUCT.PRODUCT_LINK).should('be.visible');
    
  })
})