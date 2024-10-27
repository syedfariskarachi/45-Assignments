// Greet users differently, especially 'admin'.
let admin = ["Faris shah", "user2", "user3"];
admin.forEach((admin) => {
    if (admin == "Faris shah") {
        console.log("Hello, Faris would you like to see Hamid Status report?");
    }
    else {
        console.log(`Hello ${admin}, thank you for logging again`);
    }
});
