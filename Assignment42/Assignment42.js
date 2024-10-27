"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Great Magicians: Add "the Great" to magician names.
const Assignment41_1 = require("../Assignment41/Assignment41");
let magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magicians);
(0, Assignment41_1.Show_magicians)(magicians);
