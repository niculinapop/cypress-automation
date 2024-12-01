const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';
import Checkout from '../helpers/checkout';

describe('Complete checkout process', () => {
  it('should successfully complete the checkout and place the order',async () => {
    await Login.login();
    cy.get(WEB.CART.ADD_TO_CART_BUTTON).click();
    cy.xpath(WEB.CART.CART_LINK).click();
    cy.get(WEB.CHECKOUT.CHECKOUT_BUTTON).click();
    await Checkout.checkout();
    cy.get(WEB.CHECKOUT.FINISH_BUTTON).click();

    cy.xpath(WEB.MESSAGE.CHECKOUT_COMPLETE_MESSAGE).should('have.text', 'Thank you for your order!');
    
    
  })
})