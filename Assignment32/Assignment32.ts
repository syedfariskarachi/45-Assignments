// Checking Usernames: Ensure uniqueness in usernames.

let users: string[] = ["user1", "user2", "Faris", "user3", "user4"];
let new_users: string[] = [
  "faris",
  "user1",
  "user2",
  "user3",
  "Hassan",
  "user5",
];
new_users.forEach((newusers) => {
  if (
    users.some((existingUser) => existingUser.toLowerCase() === newusers.toLowerCase())
  ) {
    console.log(`${newusers}, please enter a new user name.`);
  } else {
    console.log(`${newusers} is available.`);
  }
});