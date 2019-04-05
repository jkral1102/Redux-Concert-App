const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  key: {type: Number },
  event: { type: String},
  location: { type: String },
  date: { type: Date, default: Date.now },
  comments: [{
    comment: { type: String }, 
    time: {type: Date, default: Date.now }
  }],

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
