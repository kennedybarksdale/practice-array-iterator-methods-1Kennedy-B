// 1.
let cities = ["Charlotte", "Phoenix", "Charleston", "Philadelphia", "New Orleans"];

cities.forEach(city => {
  console.log(city.toUpperCase());
});

// Expected output:
// CHARLOTTE
// PHOENIX
// CHARLESTON
// PHILADELPHIA
// NEW ORLEANS

// 2.
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num ** 2);

console.log(squares);

// Expected output:
// [1, 4, 9, 16, 25]

// 3.
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);

console.log(highScores);

// Expected output:
// [85, 90, 100]

// 4.
let favoriteFood = ["cheeseburger", "steak", "ramen", "lasagna", "cheesecake"];

let firstLongFood = favoriteFood.find(food => food.length > 4);
let firstLongFoodIndex = favoriteFood.findIndex(food => food.length > 4);

console.log(firstLongFood);
console.log(firstLongFoodIndex);

// Expected output:
// cheeseburger
// 0

// 5.
let temperatures = [88, 81, 71, 77, 70];

let results = [
  temperatures.some(temp => temp > 90),
  temperatures.every(temp => temp > 50)
];

console.log(results);

// Expected output:
// [false, true]

// 6.
let totalBudget = 375;
let prices = [90, 75, 110, 60];

let remainingBudget = prices.reduce(
  (remaining, price) => remaining - price,
  totalBudget
);

console.log(remainingBudget);

// Expected output:
// 40