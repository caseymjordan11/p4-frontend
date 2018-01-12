import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom"
import axios from "axios"

import './App.css';

import Header from './Header.js'
import Quiz from './Quiz.js'
import Delivery from './Delivery.js'
import RecShow from './RecShow.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delivery: "Delivery",
      burger: 0,
      mexican: 0,
      indian: 0,
      thai: 0,
      italian: 0,
      chinese: 0,
      pizza: 0,
      salad: 0,
      desert: 0,
      sushi: 0,
      money: 0,
      rec: "",
      data: [],
      lat: null,
      lng: null,
      class: "btn-hide",
      class2: "getRec",
      tryAgain: ""
  }
  this.IncreaseBP = this.IncreaseBP.bind(this)
  this.IncreaseC = this.IncreaseC.bind(this)
  this.IncreaseI = this.IncreaseI.bind(this)
  this.IncreaseMITSDS = this.IncreaseMITSDS.bind(this)
  this.IncreaseBCP = this.IncreaseBCP.bind(this)
  this.IncreaseIS = this.IncreaseIS.bind(this)
  this.IncreaseMIT = this.IncreaseMIT.bind(this)
  this.IncreaseSD = this.IncreaseSD.bind(this)
  this.IncreaseBI = this.IncreaseBI.bind(this)
  this.IncreaseCP = this.IncreaseCP.bind(this)
  this.IncreaseMITS = this.IncreaseMITS.bind(this)
  this.IncreaseS = this.IncreaseS.bind(this)
  this.IncreaseD = this.IncreaseD.bind(this)
  this.IncreaseBPS = this.IncreaseBPS.bind(this)
  this.IncreaseCIITS = this.IncreaseCIITS.bind(this)
  this.IncreaseM = this.IncreaseM.bind(this)
  this.IncreaseBCI = this.IncreaseBCI.bind(this)
  this.IncreaseMITPS = this.IncreaseMITPS.bind(this)
  this.setMoney1 = this.setMoney1.bind(this)
  this.setMoney2 = this.setMoney2.bind(this)
  this.setMoney3 = this.setMoney3.bind(this)
  this.setMoney4 = this.setMoney4.bind(this)
  this.setTakeoutNo = this.setTakeoutNo.bind(this)
  this.setTakeoutYes = this.setTakeoutYes.bind(this)
  this.getRec = this.getRec.bind(this)
  this.setLocation = this.setLocation.bind(this)
  this.seeResults = this.seeResults.bind(this)
  this.retakeQuiz = this.retakeQuiz.bind(this)
}

  retakeQuiz(){
    this.setState({
      class: "btn-hide",
      class2: "getRec",
      delivery: "Delivery",
      burger: 0,
      mexican: 0,
      indian: 0,
      thai: 0,
      italian: 0,
      chinese: 0,
      pizza: 0,
      salad: 0,
      desert: 0,
      sushi: 0,
      money: 0,
      rec: ""
    })
  }

  seeResults(){
    if (this.state.class !== "btn-show"){
      this.setState({
        class: "btn-show",
        class2: "btn-hide"
      })
    } else {
      this.setState({
        class1: "btn-hide"
      })
    }
  }

  setLocation(lt,ln){
    this.setState({
      lat: lt,
      lng: ln
    })
    console.log(this.state.lat)
    console.log(this.state.lng)
  }

  IncreaseBP(e){
    e.preventDefault()
    let b = this.state.burger
    let p = this.state.pizza
    this.setState({
      burger: b+=1,
      pizza: p+=1
    })
  }

  IncreaseC(e){
    e.preventDefault()
    let c = this.state.chinese
    this.setState({
      chinese: c+=1.2
    })
  }

  IncreaseI(e){
    e.preventDefault()
    let i = this.state.italian
    let t = this.state.thai
    this.setState({
      italian: i+=1,
      thai: t+=1
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
      thai: t+=.7
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
      salad: s+=1.5
    })
  }

  IncreaseD(e){
    e.preventDefault()
    let d = this.state.desert
    this.setState({
      desert: d+=1.5
    })
  }

  IncreaseBPS(e) {
    e.preventDefault()
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
      thai: t+=.5,
      salad: s+=.5
    })
  }

  IncreaseM(e){
    e.preventDefault()
    let m = this.state.mexican
    this.setState({
      mexican: m+=1.5
    })
  }

  IncreaseBCI(e){
    e.preventDefault()
    let b = this.state.burger
    let c = this.state.chinese
    let i = this.state.italian
    this.setState({
      burger: b+=1,
      chinese: c+=1,
      italian: i+=1
    })
  }

  IncreaseMITPS(e){
    e.preventDefault()
    let m = this.state.mexican
    let i = this.state.indian
    let t = this.state.thai
    let p = this.state.pizza
    let s = this.state.sushi
    this.setState({
      mexican: m+=.5,
      indian: i+=.5,
      thai: t+=.5,
      pizza: p+=.5,
      sushi: s+=.5
    })
  }

  setMoney1(e){
    e.preventDefault()
    this.setState({
      money: 1
    })
  }

  setMoney2(e){
    e.preventDefault()
    this.setState({
      money: 2
    })
  }

  setMoney3(e){
    e.preventDefault()
    this.setState({
      money: 3
    })
  }

  setMoney4(e){
    e.preventDefault()
    this.setState({
      money: 4
    })
  }

  setTakeoutNo(e){
    e.preventDefault()
    this.setState({
      delivery: ""
    })
  }

  setTakeoutYes(e){
    e.preventDefault()
    this.setState({
      delivery: "Delivery"
    })
  }

  getRec(e){
    e.preventDefault()
    let foods = [
      "Burger",
      "Mexican",
      "Indian",
      "Thai",
      "Italian",
      "Chinese",
      "Pizza",
      "Salad",
      "Desert",
      "Sushi"
    ]
    let foodVals = [
      this.state.burger,
      this.state.mexican,
      this.state.indian,
      this.state.thai,
      this.state.italian,
      this.state.chinese,
      this.state.pizza,
      this.state.salad,
      this.state.desert,
      this.state.sushi
    ]
    let index = foodVals.indexOf(Math.max(...foodVals))
    let foodRec = foods[index]
    this.setState({
      rec: foodRec
    })
      axios
        .get(
          `https://indecisive-chef-api.herokuapp.com/api/yelp/${this.state.rec + this.state.delivery}/${this.state.lat}/${this.state.lng}/${this.state.money}`
        )
        .then(res => {
          this.setState({
            data: res["data"]["jsonBody"]["businesses"],
            tryAgain: ""
          })
          console.log(this.state.data)
          {this.seeResults()}
        })
        .catch(err => {
          this.setState({
            tryAgain: "Click again"
          })
          console.log(err)
        })
    }


  render() {
    return (
      <div>
        <Header
        />
        <Switch>
        <Route exact path='/quiz' render={(props) => (
          <div class="quiz">
            <Quiz
              question="How Much Grease?"
              answer1="Some"
              answer2="A Lot!"
              answer3="Just a Little"
              answer4="Basically None"
              onClickOne={this.IncreaseBP}
              onClickTwo={this.IncreaseC}
              onClickThree={this.IncreaseI}
              onClickFour={this.IncreaseMITSDS}
            />
            <Quiz
              question="Is it Going to be Spicy?"
              answer1="Nope"
              answer2="A Bit of Spice is Fine"
              answer3="Yup, Has to Be!"
              answer4="Definitely Not!"
              onClickOne={this.IncreaseBCP}
              onClickTwo={this.IncreaseIS}
              onClickThree={this.IncreaseMIT}
              onClickFour={this.IncreaseSD}
            />
            <Quiz
              question="How Much Meat?"
              answer1="Some"
              answer2="ALL THE MEAT!"
              answer3="Meat Isn't Vital"
              answer4="NONE NOPE"
              onClickOne={this.IncreaseBI}
              onClickTwo={this.IncreaseCP}
              onClickThree={this.IncreaseMITS}
              onClickFour={this.IncreaseD}
            />
            <Quiz
              question="Any Veggies?"
              answer1="On the Side Maybe, I Guess"
              answer2="Throw Them on Top Sure"
              answer3="Most Definitely, There Has to Be"
              answer4="NOPE"
              onClickOne={this.IncreaseBCI}
              onClickTwo={this.IncreaseMITPS}
              onClickThree={this.IncreaseS}
              onClickFour={this.IncreaseD}
            />
            <Quiz
              question="How much Sauce?"
              answer1="Not Too Much"
              answer2="YUP!"
              answer3="Do Salsa and Queso Count?"
              answer4="Only if its Chocolate"
              onClickOne={this.IncreaseBPS}
              onClickTwo={this.IncreaseCIITS}
              onClickThree={this.IncreaseM}
              onClickFour={this.IncreaseD}
            />
            <Quiz
              question="How much Money Do You Want to Spend?"
              answer1="$"
              answer2="$$"
              answer3="$$$"
              answer4="$$$$"
              onClickOne={this.setMoney1}
              onClickTwo={this.setMoney2}
              onClickThree={this.setMoney3}
              onClickFour={this.setMoney4}
            />
            <Delivery
              question="Delivery?"
              answer1="Yes"
              answer2="No"
              onClickOne={this.setTakeoutYes}
              onClickTwo={this.setTakeoutNo}
              setLocation={this.setLocation}
            />
            <div class="getRecBut">
              <form onSubmit={this.getRec}>
                <button class={this.state.class2}>Get Recommendation!</button>
              </form>
              <Link to='/quiz/rec'>
                <button class={this.state.class}>See Results!</button>
              </Link>
              <p>{this.state.tryAgain}</p>
            </div>
          </div>
        )}  />
        <Route exact path='/quiz/rec' render ={() => (
          <div>
            <RecShow
              rec={this.state.rec}
              recs={this.state.data}
              lat={this.state.lat}
              lng={this.state.lng}
              retakeQuiz={this.retakeQuiz}
            />
          </div>
        )}  />
        <Route path='/*' render ={() => (
          <Redirect to='/quiz'/>
        )}  />

        </Switch>
      </div>
    )
  }
}

export default App
