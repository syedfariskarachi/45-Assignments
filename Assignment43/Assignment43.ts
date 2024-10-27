// Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
import { Show_magicians } from "../Assignment41/Assignment41";
let magician: string[] = ["John", "Bob", "Alice"];
function call_magician(magician: string[]) {
  let great_magician = [];
  magician.forEach((magicians) => {
    great_magician.push(`${magicians} the great`);
  });
  return great_magician;
}
let great_magician = call_magician(magician.slice());
console.log("Original Array");
Show_magicians(magician);
console.log("Great array ");
Show_magicians(great_magician);
