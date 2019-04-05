const router = require("express").Router();
const eventRoutes = require("./events");

// Event routes
router.use("/api", eventRoutes)

// API CALL VIA AXIOS 
// const axios = require('axios')

// router.get("/events:id", function(req, res) {
//   // apiKey: 'h3LjwpmzbpDcs6wx.
//   let searchTerm = req.params.id
//   axios.get('http://api.eventful.com/json/events/search?app_key=h3LjwpmzbpDcs6wx&location=' + searchTerm + '&date=Future')
//   .then(response => res.json(response.data))
//   })

module.exports = router;
