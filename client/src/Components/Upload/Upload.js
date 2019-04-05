import React, { Component } from 'react'
import './Upload.css'
import axios from 'axios'
//import API from '../../utils/API'
import { connect } from 'react-redux';
import { saveEvent } from '../../Actions/actions';
import PropTypes from 'prop-types';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      location: '',
      date: ''
    }

    this.handleEvent = this.handleEvent.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleDate = this.handleDate.bind(this);
   // this.saveNewEvent = this.saveNewEvent.bind(this)
  }

  handleEvent = (e) => {
    this.setState({ event: e.target.value });
  }

  handleLocation = (e) => {
    this.setState({ location: e.target.value });
  }

  handleDate = (e) => {
    this.setState({ date: e.target.value });
  }

  saveNewEvent(data) {
    this.props.saveEvent(data)
  }



  render() {
    var eventData = {
      event: this.state.event,
      location: this.state.location,
      date: this.state.date
    }
    return (

      <div id='UploadDiv' class='title'>
        <p class='uppercase'>Upload</p>
        <div>
          <input type='text' name='event' onChange={this.handleEvent} placeholder='Event' />
          <input type='text' name='location' onChange={this.handleLocation} placeholder='Location' />
          <input type='text' name='date' onChange={this.handleDate} placeholder='Date' />

          <button id='submitBtn' type='submit'
            onClick={() => { this.saveNewEvent(eventData) }}>
            Submit
          </button>
        </div>
      </div>

    )
  }
}

// export default Upload;


// Posts - component name, fetchPosts - imported postAction, posts - mapStatetoProps
Upload.propTypes = {
  saveEvent: PropTypes.func.isRequired
}
// // bring in newly added items in the state to the component
const mapStateToProps = state => ({
  events: state.eventData.events
})

export default connect(mapStateToProps, { saveEvent })(Upload);