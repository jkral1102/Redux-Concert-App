import React, { Component } from 'react'
import './App.css'

//import API from './utils/API'
//import axios from 'axios'
// Import provider so redux and react can interact
import { Provider } from 'react-redux'
import store from './store.js'
import Main from './Components/Main'


class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div id="App">
          <Main/>
        </div>
      </Provider>
    )
  }
}


export default App;

/* 
CONCERTS TO DO:
1) header
2) log in page/front
3) user page - calendar
  4) first-avenue.com/calendar - similar: CALENDER
  5) All Events, 2016, 2017 year buttons (add timeline later)
  5.5) Calendar menu 
  6) Recent blog posts - right
  7) bottom right (where see em live is) - add concert to calendar: Name, Date, Photo, Location, Notes
8) Extra - 
  Pull up random popular song by the artist when 



APP IDEA: Life Events Tracker
  Track: Concerts, Food, and other Events - be able to review past ones, update, delete, etc
  Calendar or timeline interface
  
*/

