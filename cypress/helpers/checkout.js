const {WEB} = require('../locators/locatorPath');

//To define personal data 
// class Checkout {
// static async checkout() {

//   const firstname = 'Niculina';
//   const lastname = 'Pop';
//   const postalcode = '445100';

//   //enter personal data, click continue
//   await cy.get(WEB.CHECKOUT.FIRST_NAME_INPUT).type(firstname);
//   await cy.get(WEB.CHECKOUT.LAST_NAME_INPUT).type(lastname);
//   await cy.get(WEB.CHECKOUT.POSTAL_CODE_INPUT).type(postalcode);
//   await cy.get(WEB.CHECKOUT.CONTINUE_BUTTON).click();
// }
// }

class Checkout {
  static async checkout({firstname, lastname, postalcode}) {

    if (!firstname || !lastname || !postalcode) {
      throw new Error('Campurile sunt obligatorii');
      
    }
    await cy.get(WEB.CHECKOUT.FIRST_NAME_INPUT).type(firstname);
    await cy.get(WEB.CHECKOUT.LAST_NAME_INPUT).type(lastname);
    await cy.get(WEB.CHECKOUT.POSTAL_CODE_INPUT).type(postalcode);
    await cy.get(WEB.CHECKOUT.CONTINUE_BUTTON).click();

  }
}

export default Checkout;