import {
    SAVE_EVENT
} from './types'


import axios from 'axios'
import API from '../utils/API'

// POST: Save an event to db
export const saveEvent = (data) => dispatch => {
    // not capturing input yet via event, do this in component?

    axios.post("/api/events", data)
      //  .then(res => res.json())
       
        // .then(data => dispatch({
        //         type: SAVE_EVENT,
        //         payload: data.value
        // }))
          .then(res => {
            console.log('server response by action:', res);
          })
          .catch(function (err) {
            console.log(err);
          })
        //.then(data => console.log("Action called - API event post " + data))
            //console.log("Saved event to db: " + data.name);
 
}