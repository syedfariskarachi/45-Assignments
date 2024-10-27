// Describing cities with a function.

function cities(city: string = "karachi", country: string = "pakistan") {
  console.log(`${city} is in ${country}`);
}
cities(); // print default perameter
cities("dhaka", "Bangladesh");
