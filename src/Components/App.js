import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom"
import axios from "axios"

import './App.css';

import Header from './Header.js'
import Quiz from './Quiz.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Categories: {
      Money: 0,
      Address: 0,
      Delivery: 0,
      Burgers: 0,
      Mexican: 0,
      Indian: 0,
      Thai: 0,
      Italian: 0,
      Chinese: 0,
      Pizza: 0,
      Salad: 0,
      Desert: 0,
      Sushi: 0
    }
  }
}

  increaseBurgers(e) {
    e.preventDefault()
    console.log("hi world")
    // this.setState(
    //   this.state.Categories.Burgers += 1
    // )
  }


  render() {
    return (
      <div>
        <Header />
        <Quiz
          answer1="Question One"
          answer2="Question Two"
          answer3="Question Three"
          answer4="Question Four"
          question="This is a question"
          onClick={this.increaseBurgers}
        />
        <Quiz
          answer1="1"
          answer2="2"
          answer3="3"
          answer4="4"
          question="This is another question"
          onClick={this.increaseBurgers}
        />
      </div>
    )
  }
}

export default App;
