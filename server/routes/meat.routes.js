const meatController = require("../controllers/meat.controller");

module.exports = (app) => {
    app.post("/api/meat", meatController.createNewMeat);
    app.get("/api/meat", meatController.getAllMeats);
    app.get("/api/meat/:id", meatController.getOneMeat);
    app.get("/api/meatType/:type", meatController.getOneType);
    app.put("/api/meat/:id", meatController.updateMeat);
    app.delete("/api/meat/:id", meatController.deleteExistingUser);
};

// const sortedPets = pets.sort((a, b) => {
//     if (a.petType === b.petType) {
//         return 0;
//       } else {
//         return -1;
//       }
//     });
//     console.log(sortedPets);