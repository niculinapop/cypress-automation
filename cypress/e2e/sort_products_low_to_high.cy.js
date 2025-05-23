const {WEB} = require('../locators/locatorPath');
import Login from '../helpers/login';

describe('Sorting products Low to High', () => {
  it('should display products in ascending price order', async () => {
    await Login.login();
    cy.get(WEB.SORT.SORT_DROPDOWN).select('Price (low to high)');
    cy.get(WEB.SORT.SORT_OPTION_LOW_TO_HIGH).click(); 

    cy.get('.inventory_item_price').then(($prices) => {
      const actualPrices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
      const expectedSorted = [...actualPrices].sort((a, b) => a - b);

      actualPrices.forEach((price, index) => {
        expect(price).to.equal(expectedSorted[index]);
      });
    });
  })
})