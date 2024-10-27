"use strict";
// Magicians: Display magician names from an array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show_magicians = Show_magicians;
let magicians = ["Alice", "David", "Chris"];
function Show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
exports.default = Show_magicians(magicians);
