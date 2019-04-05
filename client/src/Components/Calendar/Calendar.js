import React, { Component } from 'react'
import './Calendar.css'
import Upload from '../Upload'
import Blog from '../Blog'

class Calendar extends Component {
  render() {

    return (
      <div id='Calendar'>
        <div id='CalendarMenu' class='uppercase'>
          <div><div class='title uppercase'>Calendar</div></div>
          <div>All Events</div>
          <div >2016</div>
          <div> 2017</div>
          <div> 2018</div>
        </div>
        <div id='CalendarBody'>
          <div id='CalendarEvents'>
            <p class='uppercase'>Main</p>
          </div>
          <div id='Sidebar'>
            <Blog />
            <Upload 
              saveEvent={this.props.saveEvent}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;