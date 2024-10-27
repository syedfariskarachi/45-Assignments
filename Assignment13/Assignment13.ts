// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation: string[] = ["honda", "toyota", "bmw", "aodi"];
// for each loop
console.log("With ForEach Loop")
transportation.forEach((transportation) => {
  console.log(`I would like to own a ${transportation}`);
});
// for loop
console.log("With For loop")
for (let i = 0; i < transportation.length; i++) {
  const element = ` I would like to own a ${transportation[i]}`;
  console.log(element);
}