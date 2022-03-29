const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];

const generateMessages = (array) => {
  return array.map(one_thing => {
    return `Hi ${one_thing.name}! ${one_thing.discount}% off our best candies for you today!`
  })
}

console.log(generateMessages(namesAndDiscounts));