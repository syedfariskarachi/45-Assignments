// Great Magicians: Add "the Great" to magician names.
import { Show_magicians } from "../Assignment41/Assignment41";

let magicians: string[] = ["Alice", "David", "Chris"];
function make_great(magicians:string[]){
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great"
        
    }

}
make_great(magicians)
Show_magicians(magicians)
