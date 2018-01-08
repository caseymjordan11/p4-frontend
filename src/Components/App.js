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
      money: 0,
      address: 0,
      delivery: 0,
      burgers: 0,
      mexican: 0,
      indian: 0,
      thai: 0,
      italian: 0,
      chinese: 0,
      pizza: 0,
      salad: 0,
      desert: 0,
      sushi: 0
  }
  this.increaseBurgers = this.increaseBurgers.bind(this)
}

  increaseBurgers(e) {
    e.preventDefault()
    let val = (this.state.burgers)
    this.setState({
      burgers: val += 1
    })
  }

  increaseMexican(e) {
    e.preventDefault()
    let val = (this.state.mexican)
    this.setState({
      mexican: val += 1
    })
  }

  increaseIndian(e) {
    e.preventDefault()
    let val = (this.state.indian)
    this.setState({
      indian: val += 1
    })
  }

  increaseThai(e) {
    e.preventDefault()
    let val = (this.state.thai)
    this.setState({
      thai: val += 1
    })
  }

  increaseItalian(e) {
    e.preventDefault()
    let val = (this.state.italian)
    this.setState({
      italian: val += 1
    })
  }

  increaseChinese(e) {
    e.preventDefault()
    let val = (this.state.chinese)
    this.setState({
      chinese: val += 1
    })
  }

  increasePizza(e) {
    e.preventDefault()
    let val = (this.state.pizza)
    this.setState({
      pizza: val += 1
    })
  }

  increaseSalad(e) {
    e.preventDefault()
    let val = (this.state.salad)
    this.setState({
      salad: val += 1
    })
  }

  increaseDesert(e) {
    e.preventDefault()
    let val = (this.state.desert)
    this.setState({
      desert: val += 1
    })
  }

  increaseSushi(e) {
    e.preventDefault()
    let val = (this.state.sushi)
    this.setState({
      sushi: val += 1
    })
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
          onSubmit1=
          onsubmit2=
          onSubmit3=
          onSubmit4=
        />
        <Quiz
          answer1="1"
          answer2="2"
          answer3="3"
          answer4="4"
          question="This is another question"
        />
        {this.state.burgers}
      </div>
    )
  }
}

export default App;
