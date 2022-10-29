const mongoose = require("mongoose");

const MeatSchema = {
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [3, "Name must be at least 3 characters"],
    },
};

module.exports = mongoose.model("Meat", MeatSchema);