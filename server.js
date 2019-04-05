const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const eventsController = require("./controllers/eventsController");
const db = require("./models");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

// // Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/src"));
}

// Add routes, both API and view
//app.use(routes);
// Express routing
app.post('/api/events', function (req, res) {
  db.Event
    .create(req.body)
    .then(console.log('server: saving event to db', req.body))
    // LATER- SEND BACK NEW EVENT PLUS ALL EVENTS ? TO AUTO UPDATE PAGE
    .then(data => {
      // res.json(data)
      res.status(200).json(data)
    })
    .catch(err => res.status(422).json(err));
})


// app.get('/api/events', function (req, res) {
//   db.Event
//     .find(req.query)
//     .sort({ date: -1 })
//     .then(data => res.json(data))
//     .catch(err => res.status(422).json(err));
// })


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/events",
  { useNewUrlParser: true }
);


// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
