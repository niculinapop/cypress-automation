const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Back to products button functionality', () => {
  it('should navigate back to homepage',async () => {
    await Login.login();
    cy.xpath(WEB.PRODUCT.PRODUCT_LINK).click();
    cy.get(WEB.PRODUCT.BACK_TO_PRODUCTS_BUTTON).click();

    cy.get(WEB.PRODUCT.BACK_TO_PRODUCTS_BUTTON).should('not.exist');

  })
})