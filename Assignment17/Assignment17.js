// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guest2 = ["rehman", "azeeem", "hameed"];
while (guest2.length > 2) {
    //check guest array untill its not equal to 2
    let remove_guest = guest2.pop(); // remove array items untill items not equal to 2
    console.log(`sorry, ${remove_guest} i can't invite you for dinner. `);
}
guest2.forEach((guest) => {
    console.log(`Asalam o alaikom ${guest2}, you are still invited to dinner.`);
});
