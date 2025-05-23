const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Sorting products Z to A', () => {
  it('should display products in descending alphabetical order', async () => {
    await Login.login();
    cy.get(WEB.SORT.SORT_DROPDOWN).select('Name (Z to A)');
    cy.get(WEB.SORT.SORT_OPTION_Z_TO_A).click(); 

    cy.get('.inventory_item_name').then(($items) => {
      const actualNames = [...$items].map(el => el.innerText);
      const expectedSorted = [...actualNames].sort().reverse();

      actualNames.forEach((name, index) => {
        expect(name).to.equal(expectedSorted[index]);
      });
    }); 
  })
})