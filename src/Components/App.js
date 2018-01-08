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
      burger: 0,
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

}

  increaseBP(e){
    e.preventDefault()
    let b = this.state.burger
    let p = this.state.pizza
    this.setState({
      burger: b+=1,
      pizza: p+=1
    })
  }

  increaseC(e){
    e.preventDefault()
    let c = this.state.chinese
    this.setState({
      pizza: p+=1
    })
  }

  increaseI(e){
    e.preventDefault()
    let i = this.state.italian
    let t = this.state.thai
    this.setState({
      italian: i+=1
      thai: t+=1,
    })
  }

  IncreaseMITSDS(e){
    e.preventDefault()
    let m = this.state.mexican
    let i = this.state.indian
    let sa = this.state.salad
    let d = this.state.desert
    let su = this.state.sushi
    this.setState({
      mexican: m+=.5,
      indian: i+=.5,
      salad:sa+=.5,
      desert:d+=.5,
      sushi:su+=.5
    })
  }

  IncreaseBCP(e){
    e.preventDefault()
    let b = this.state.burger
    let c = this.state.chinese
    let p=this.state.pizza
    this.setState({
      burger:b+=.7,
      chinese:c+=.7,
      pizza:p+=.7
    })
  }

  IncreaseIS(e){
    e.preventDefault()
    let i = this.state.italian
    let s = this.state.sushi
    this.setState({
      italian: i+=1,
      sushi: s+=1
    })
  }

  IncreaseMIT(e){
    e.preventDefault()
    let m = this.state.mexican
    let i = this.state.indian
    let t = this.state.thai
    this.setState({
      mexican: m+=.7,
      indian: i+=.7,
      thai: i+=.7
    })
  }

  IncreaseSD(e){
    e.preventDefault()
    let s = this.state.salad
    let d = this.state.desert
    this.setState({
      salad: s+=1,
      desert: d+=1
    })
  }

  IncreaseBI(e) {
    e.preventDefault()
    let b = this.state.burger
    let i = this.state.italian
    this.setState({
      burger: b+=1,
      italian: i+=1
    })
  }

  IncreaseCP(e) {
    e.preventDefault()
    let c = this.state.chinese
    let p = this.state.pizza
    this.setState({
      chinese: c+=1,
      pizza: p+=1
    })
  }

  IncreaseMITS(e) {
    e.preventDefault()
    let m = this.state.mexican
    let i = this.state.indian
    let t = this.state.thai
    let s = this.state.sushi
    this.setState({
      mexican: m+=.6,
      indian: i+=.6,
      thai: t+=.6,
      sushi: s+=.6
    })
  }

  IncreaseS(e){
    e.preventDefault()
    let s = this.state.salad
    this.setState({
      salad: s+=3
    })
  }

  IncreaseD(e){
    e.preventDefault()
    let d = this.state.desert
    this.setState({
      desert: d+=3
    })
  }

  IncreaseBPS(e) {
    let b = this.state.burger
    let p = this.state.pizza
    let s = this.state.sushi
    this.setState({
      burger: b+=.7,
      pizza: p+=.7,
      sushi: s+=.7
    })
  }

  IncreaseCIITS(e){
    e.preventDefault()
    let c = this.state.chinese
    let ind = this.state.indian
    let ital = this.state.italian
    let t = this.state.thai
    let s = this.state.salad
    this.setState({
      chinese: c+=.5,
      indian: ind+=.5,
      italian: ital+=.5,
      thai: thai+=.5,
      salad: s+=.5
    })
  }

  IncreaseM(e){
    e.preventDefault()
    let m = this.state.mexican
    this.setState({
      mexican: m+=3
    })
  }



  render() {
    return (
      <div>
        <Header />
        <Quiz
          question="This is a question"
          answer1="Question One"
          answer2="Question Two"
          answer3="Question Three"
          answer4="Question Four"
          onClickOne={}
          onClickTwo={}
          onClickThree={}
          onClickFour={}
        />
      </div>
    )
  }
}

export default App;
