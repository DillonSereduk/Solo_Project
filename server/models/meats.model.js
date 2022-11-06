const mongoose = require("mongoose");

const MeatSchema = {
    name: {
        type: String,
        required: [true, "name of product is required"],
        minLength: [4, "Name must be at least 4 characters"],
    },
    type: {
        type: String,
        required: [true, "type of meat is required"],
        minLength: [4, "Type must be at least 4 characters"],
    },
    description: {
        type: String,
        required: [true, "product description is required"],
        minLength: [10, "Description must be at least 10 characters"],
    },
    tray_size: {
        type: String,
        required: [true, "tray size is required"],
        minLength: [3, "tray size must be at least 3 character"],
        maxLength: [4, "tray size can be no more than 4 characters"]
    }
};

module.exports = mongoose.model("Meat", MeatSchema);