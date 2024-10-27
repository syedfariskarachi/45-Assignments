"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
const Assignment41_1 = require("../Assignment41/Assignment41");
let magician = ["John", "Bob", "Alice"];
function call_magician(magician) {
    let great_magician = [];
    magician.forEach((magicians) => {
        great_magician.push(`${magicians} the great`);
    });
    return great_magician;
}
let great_magician = call_magician(magician.slice());
console.log("Original Array");
(0, Assignment41_1.Show_magicians)(magician);
console.log("Great array ");
(0, Assignment41_1.Show_magicians)(great_magician);
