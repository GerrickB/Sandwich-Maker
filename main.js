// Functions
const returnRandBread = () => {
  const breadChoices = ['White', 'Toast', 'Sourdough', 'Wheat', 'Garlic'];
  return breadChoices[Math.floor(Math.random() * 5)];
};

const returnRandCheese = () => {
  const cheeseChoices = ['American', 'Grilled', 'Swiss', 'Pepper', 'Mozarella'];
  return cheeseChoices[Math.floor(Math.random() * 5)];
};

const returnRandMeat = () => {
  const meatChoices = ['Bacon', 'Chicken', 'Ham', 'Roast Beef', 'Pepperoni'];
  return meatChoices[Math.floor(Math.random() * 5)];
};

const returnRandSalad = () => {
  const saladChoices = ['Lettuce', 'Tomato', 'Onions', 'Avocado', 'Kimchi'];
  return saladChoices[Math.floor(Math.random() * 5)];
};

// Factory object
const sandwichFactory = (orderNum, bread, cheese, meat, salad) => {
  return {
    _orderNum: orderNum,
    _bread: bread,
    _cheese: cheese,
    _meat: meat,
    _salad: salad,
  }

};