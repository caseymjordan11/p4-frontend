import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom"
import axios from "axios"

import './App.css';

import Header from './Header.js'

class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default App;
