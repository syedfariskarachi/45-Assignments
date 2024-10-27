// Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
let guests = [
    "rehman",
    "azeeem",
    "hameed",
    "hammad",
    "farhan",
    "hassan",
    "usman",
    "osama",
    "haseeb",
];
for (let i = 0; i < guests.length; i++) {
    const element = `Assalam o aliakom ${guests[i]}, we had ${guests.length} guests over for dinner `;
    console.log(element);
}
