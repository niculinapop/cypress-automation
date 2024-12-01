const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Logout test-saucedemo', () => {
  it('should display back the login page', async () => {
    await Login.login();
   
    cy.get(WEB.MENU.MENU_BUTTON).click()
    cy.get(WEB.MENU.LOGOUT_BUTTON).click();

    cy.get(WEB.LOGIN.LOGIN_BUTTON, { timeout: 10000 }).should('be.visible');
    
  })
})