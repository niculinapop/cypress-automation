const { WEB } = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Menu About button redirect', () => {
  it('should redirect to About page when About is clicked from the menu', async () => {
    await Login.login();

    cy.get(WEB.MENU.MENU_BUTTON).click();
    cy.get(WEB.MENU.ABOUT_BUTTON).click();

    
    cy.url().should('include', 'saucelabs.com'); 
  });
});
