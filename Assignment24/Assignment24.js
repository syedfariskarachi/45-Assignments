// Expand your conditional tests to cover a wider range of comparisons.
//equlity with string
console.log("Testing Equlity with string:", "PUBG" == "PUBG"); //true
console.log("Equlity with string:", 12 == 12); //true
//numerical test
console.log("Numerical Test:", 7 > 10); //false
console.log("Numerical Test:", 3 < 4); //true
// and(&&) or(|) test
console.log(true && false); //false
console.log(true || false); //true
//test item is in a array
let car = ["Toyota", "Audi", "BMW", "Honda"];
console.log(car.includes("Ferari")); //false
console.log(car.includes("BMW")); //true
//test item is not in a array
console.log(!car.includes("Bently")); //true
