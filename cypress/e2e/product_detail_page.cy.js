const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Verify access after clicking on a product', () => {
  it('should navigate to the product detail page when clicking on a product',async () => {
    await Login.login();
    cy.xpath(WEB.PRODUCT.PRODUCT_LINK).click();
    
    cy.get(WEB.PRODUCT.BACK_TO_PRODUCTS_BUTTON).should('be.visible');
  })
})