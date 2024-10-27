// Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.


let friendsName:string[]= ["nabeel", "usman", "ahmer", "rohan"]; 
for (let i = 0; i < friendsName.length; i++) {
  const element = ` Hello ${friendsName[i]}, What's going on `;
  console.log(element);
}