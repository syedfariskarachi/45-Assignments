// Magicians: Display magician names from an array.
 
  let magicians: string[] = ["Alice", "David", "Chris"];

  export function Show_magicians(magicians: string[]) {
      magicians.forEach(magician => {
          console.log(magician);
      });
  }
  
  export default Show_magicians(magicians);