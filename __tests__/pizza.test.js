import { PizzaPie, toppingCollector, showPizzaDetails } from './../src/pizza.js';
// import { toppingCollector } from './../src/pizza.js';
// import { showPizzaDetails } from './../src/pizza.js';

describe('PizzaPie', () => {

  test('Should correctly identify if a small size pizza is selected', () => {
  var testPizza = new PizzaPie();
  testPizza.setSize("1")
  // testPizza.size("1")
    expect(testPizza.size).toEqual("Small");
  });

});
