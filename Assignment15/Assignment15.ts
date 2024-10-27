let invited2: string[] = ["rehman", "rameez", "shahid", "rashid"];
invited2.pop();
invited2.push("zeeshan", "sameer");
invited2.unshift("hassan");
invited2.forEach((invited) => {
  console.log(
    `Asalamo alaikom ${invited2}, tomorow is birthday and you are invited with your family please join us on my birhtday. `
  );
});
