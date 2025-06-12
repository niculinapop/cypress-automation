const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Reset App State functionality', () => {
  it('should clear cart and reset app data when Reset App State button is clicked', async () => {
    await Login.login();
    
    cy.get('#add-to-cart-sauce-labs-bike-light').click();

    cy.get(WEB.MENU.MENU_BUTTON).click();
    cy.get(WEB.MENU.RESET_APP_STATE_BUTTON).click();
    
    cy.get('#remove-sauce-labs-bike-light').should('be.visible');
    
  })
})