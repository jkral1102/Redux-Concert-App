import React, { Component } from 'react'
// To get posts from the store:
// connects components to the redux store that was provided by the Provider
//import { connect } from 'react-redux';
//import { FETCH_ARTICLES } from '../../Actions/actions';
//import PropTypes from 'prop-types';
// Components 
import Navbar from '../Navbar';
import Calendar from '../Calendar';
import './Main.css';

class Main extends Component {
  render() {

    return (
      <div>
      
        <Navbar />
        <Calendar />
      </div>
    )
  }
}

// Posts - component name, fetchPosts - imported postAction, posts - mapStatetoProps
// Main.propTypes = {

// }
// // bring in newly added items in the state to the component
// const mapStateToProps = state => ({


// })
// export default connect(mapStateToProps, { FETCH_ARTICLES })(Main);
export default Main;