const express = require("express");
const Club = require("../models/club.model");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const match = {};

    const types = [
      "grouping",
      "dressing",
      "inspiration",
      "games",
      "study_rooms",
      "coding",
    ];

    // if (req.query.type) {
    //     match.type = req.query.type === 'grouping' ? "grouping" : req.query.type === "games" ? "games" : req.query.type === "inspiration" ? "inspiration" : req.query.type === "dressing" ? "dressing" : req.query.type === "study_rooms" ? "study_rooms" : req.query.type === "coding" ? "coding" : "";
    // }

    types.filter((e) => {
      if (req.query.type === e) {
        match.type = req.query.type;
      }
    });

    const sort = {};

    if (req.query.sortBy && req.query.OrderBy) {
      sort[req.query.sortBy] = req.query.OrderBy === "desc" ? -1 : 1;
    }

    let clubs = await Club.find(match)
      .populate({ path: "creator_id" })
      .populate({ path: "subcription_user_id" })
      .sort(sort)
      .lean()
      .exec();
    return res.status(200).send(clubs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const clubs = await Club.find({ creator_id: req.params._id }).lean().exec();
    return res.send(clubs);
  } catch (err) {
    res.status(520).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const club = await Club.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(club);
  } catch (err) {
    console.log("err", err);
  }
});

router.post("", async (req, res) => {
  try {
    const club = await Club.create(req.body);
    res.send(club);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
