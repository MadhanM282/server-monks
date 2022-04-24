const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://grubhub-backend:grubhub-backend@cluster0.10zgd.mongodb.net/serverMoksDatabase?retryWrites=true&w=majority"
  );
};
