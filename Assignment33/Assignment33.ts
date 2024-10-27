// Ordinal Numbers: Display numbers with their ordinal suffixes.
let number: number[] = [1, 2, 3, 4, 6, 8];
number.forEach((number) => {
  let suffix = "o";
  if (number == 1) {
    suffix = "st";
  } else if (number == 2) {
    suffix = "nd";
  } else if (number == 3) {
    suffix = "rd";
  } else if (number == 4) {
    suffix = "rth";
  } else if (number <= 10) {
    suffix = "th";
  }
  console.log(`${number}${suffix}`);
});