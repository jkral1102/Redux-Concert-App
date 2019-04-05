import axios from "axios";


// export default saveEvent = (data) => {
//   return axios.post("/api/events", data);
// }


export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Get event with a given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes event with a given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Save event or comment to db
  saveEvent: function(event) {
    return axios.post("/api/events", event);
  },
  // Save comment to db
  postComment: function(id, comment) {
    return axios.put("/api/events/" + id,  {commentBody: comment});
  }
};

