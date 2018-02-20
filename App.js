import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,View} from 'react-native';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { store } from './app/redux/store.js';
import { dispatch } from './app/redux/store.js';
import { checkAuth } from './app/redux/actions/auth-actions'
import AppNavigator from './AppNavigator'

class App extends Component {

  componentWillMount() {
    dispatch(checkAuth())
  }

  render() {
    return <AppNavigator />
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  }
}

export default connect(mapStateToProps)(App)