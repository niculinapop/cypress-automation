const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Menu button functionality', () => {
  it('should open and close the side menu',async () => {
    await Login.login();
    cy.get(WEB.MENU.MENU_BUTTON).click();
    cy.get(WEB.MENU.CROSS_BUTTON).click();
   
    cy.get(WEB.MENU.MENU_BUTTON).should('be.visible');
    
  })
})