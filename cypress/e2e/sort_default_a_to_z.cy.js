const { WEB } = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Default sorting A to Z', () => {
  it('should display products in ascending alphabetical order by default', async () => {
    await Login.login();

    // Fără selectare – testăm ordinea default (A → Z)
    cy.get('.inventory_item_name').then(($items) => {
      const actualNames = [...$items].map(el => el.innerText);
      const expectedSorted = [...actualNames].sort(); // sortare A → Z

      actualNames.forEach((name, index) => {
        expect(name).to.equal(expectedSorted[index]);
      });
    });
  }); 
});
