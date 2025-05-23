const { WEB } = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Continue Shopping Button', () => {
  it('should return to products page after clicking Continue Shopping from cart', async () => {
    await Login.login();

    cy.get(WEB.CART.ADD_TO_CART_BUTTON).click();
    cy.get(WEB.CART.CART_LINK).click();

    cy.get(WEB.CART.CONTINUE_SHOPPING_BUTTON).click();

    cy.get(WEB.CART.CONTINUE_SHOPPING_BUTTON).should('not.exist');
  });
});
