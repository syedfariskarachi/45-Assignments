let guest = ["rehman", "azeeem", "hameed"];
console.log(guest);
guest.push("hassan"); // adding item in end of the array
guest.unshift("naveen"); //adding item at start of the array
guest.splice(1, 1, "faris");
guest.forEach((guest) => {
    console.log(`Assalam o alaikom ${guest}, would you like to join me for dinner `);
});
