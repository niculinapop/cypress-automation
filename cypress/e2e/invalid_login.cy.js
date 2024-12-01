const {WEB} = require('../locators/locatorPath');

describe('Invalid login test-soucedemo', () => {
  it('should display an error for invalid credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get(WEB.LOGIN.USERNAME_INPUT).type('me_user');
    cy.get(WEB.LOGIN.PASSWORD_INPUT).type('secret_sauce');
    cy.get(WEB.LOGIN.LOGIN_BUTTON).click();
   
    cy.get(WEB.MESSAGE.ERROR_MESSAGE).should('be.visible');
  
  });
});