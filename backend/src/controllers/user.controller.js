const express = require('express');
const User = require("../models/user.model");
const Club = require("../models/club.model")
const router = express.Router();

router.get("", async (req, res) => {
    try {

        const sort = {}

        if (req.query.sortBy && req.query.OrderBy) {
            sort[req.query.sortBy] = req.query.OrderBy === 'desc' ? -1 : 1
        }

        let users = await User.find().populate({ path: "suscribed_ids" }).sort(sort).lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(user);
    } catch (err) {
        console.log('err', err);
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const user = await User.findById(req.params._id).lean().exec();

        return res.send(user);
        // res.send(user);
    } catch (err) {
        res.status(520).send(err.message);
    }
});


router.post("", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.send(user);

    }
    catch (err) {
        res.send(err.message);
    }
});

module.exports = router;