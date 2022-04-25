const mongoose = require("mongoose");

const clubSchemas = new mongoose.Schema(
  {
    club_title: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    subcription_user_id: [
      { type: mongoose.Schema.Types.ObjectId, ref: "user", required: false },
    ],
    creator_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Club = mongoose.model("club", clubSchemas);
module.exports = Club;
