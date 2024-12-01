const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Deleting a product from cart', () => {
  it('should remove the product from the cart', async () => {
    await Login.login();
    cy.get(WEB.CART.ADD_TO_CART_BUTTON).click();
    cy.xpath(WEB.CART.CART_LINK).click();
    cy.get(WEB.CART.REMOVE_BUTTON).click();

    cy.get(WEB.CART.REMOVE_BUTTON).should('not.exist');
    
  })
})