const {WEB} = require('../locators/locatorPath');

//To define general login function 
class Login {
static async login() {

  const url = Cypress.env('BASE_URL');
  const username = Cypress.env('USER_NAME');
  const password = Cypress.env('PASSWORD');
  
  //visit login page
  await cy.visit(url, {timeout: 30000 });

  //enter credentials, click login
  await cy.get(WEB.LOGIN.USERNAME_INPUT).type(username);
  await cy.get(WEB.LOGIN.PASSWORD_INPUT).type(password);
  await cy.get(WEB.LOGIN.LOGIN_BUTTON, { timeout: 10000 }).should('be.visible').click();
}
}

export default Login;