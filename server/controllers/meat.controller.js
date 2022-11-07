const Meat = require("../models/meats.model");

const createNewMeat = (req, res) => {
    Meat.create(req.body)
        .then((newMeat) => {
            res.json({ newMeat });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getAllMeats = (req, res) => {
    Meat.find()
        .then((allMeats) => {
            res.json(allMeats);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getOneMeat = (req, res) => {
    Meat.findOne({ _id: req.params.id })
        .then((queriedMeat) => {
            res.json(queriedMeat);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getOneType = (req, res) => {
    Meat.find({ type: {$regex: new RegExp('^' + req.params.type.toLowerCase(), 'i')}})
        .then((queriedMeat) => {
            res.json(queriedMeat);
            console.log(queriedMeat);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const updateMeat = (req, res) => {
    Meat.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedMeat) => {
            res.json({ updatedMeat });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const deleteExistingUser = (req, res) => {
    Meat.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

module.exports = {
    createNewMeat,
    getOneMeat,
    getAllMeats,
    updateMeat,
    deleteExistingUser,
    getOneType,
};