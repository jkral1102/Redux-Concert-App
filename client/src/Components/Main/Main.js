import React, { Component } from 'react'
// To get posts from the store:
// connects components to the redux store that was provided by the Provider
// import { connect } from 'react-redux';
// import { saveEvent } from '../../Actions/actions';
// import PropTypes from 'prop-types';
// Components 
import Navbar from '../Navbar';
import Calendar from '../Calendar';
import './Main.css';
import axios from 'axios'
import API from '../../utils/API.js'

class Main extends Component {

  // // All Database Events
  // // Save an Event
  // saveEvent = (event) => {
  //   // direct API post for now: later: dispatch action - not saveEvent but getEvents + saveEvent
  // //   API.saveEvent(event)
  // //   .then(res => {
  // //     console.log('save event to db: ' + res.data);
  // //   })
  // //   .catch(err => console.log(err));
  // // };

  // functional API save event call
//   saveEvent = (data) => {
  
//   axios.post("/api/events", data)
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
// }
// saveEvent(data) {
//   this.props.saveEvent(data)
// }

  render() {

    return (
      <div>
      
        <Navbar />
        <Calendar 
          saveEvent={() => this.saveEvent}  
          />
      </div>
    )
  }
}

// Posts - component name, fetchPosts - imported postAction, posts - mapStatetoProps
// Main.propTypes = {
//   saveEvent: PropTypes.func.isRequired
// }
// // // bring in newly added items in the state to the component
// const mapStateToProps = state => ({
//   events: state.eventData.events
// })

// export default connect(mapStateToProps, { saveEvent })(Main);
export default Main;
