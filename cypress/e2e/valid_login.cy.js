const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Valid login test-saucedemo', () => {
  it('should logged in successfully',async () => {
    await Login.login();

    cy.xpath(WEB.CART.CART_LINK).should('be.visible');
  })
})