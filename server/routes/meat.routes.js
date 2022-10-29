const meatController = require("../controllers/meat.controller");

module.exports = (app) => {
    app.post("/api/meat", meatController.createNewMeat);
    app.get("/api/meat", meatController.getAllMeats);
    app.get("/api/meat/:id", meatController.getOneMeat);
    app.put("/api/meat/:id", meatController.updateMeat);
    app.delete("/api/meat/:id", meatController.deleteExistingUser);
};