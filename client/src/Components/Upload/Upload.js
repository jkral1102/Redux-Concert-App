import React, { Component } from 'react'
import './Upload.css'

class Upload extends Component {
  render() {

    return (
      
      <div id='UploadDiv' class='title'>
              <p class='uppercase'>Upload</p>
              <form>
                <label>Add New Concert Entry </label>
                  
                  <input type='text' id="bandInput" placeholder='Band' />
                  <input type='text' id="venueInput" placeholder='Venue'/>
                  <input type='text' id="dateInput" placeholder='Date' />
              
                <button id='submitBtn' type='submit'>Submit</button>
              </form>
            </div>
      
    )
  }
}

export default Upload;