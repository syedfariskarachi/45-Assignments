// Large Shirts: Default values in make_shirt().

function make_shirts(size: string = "large", massage: string = "code is life") {
  // Assigning default perameter

  console.log(
    `Size of your shirt is ${size} with the massage ${massage} printed on it.` // print
  );
}
make_shirts("medium", "learning typescript"); //call make_shirts function
