import React, { Component } from "react"
import "./Quiz.css"

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state={
      class1: "button",
      class2: "button",
      class3: "button",
      class4: "button"
    }
    this.clickBut1 = this.clickBut1.bind(this)
    this.clickBut2 = this.clickBut2.bind(this)
    this.clickBut3 = this.clickBut3.bind(this)
    this.clickBut4 = this.clickBut4.bind(this)
  }

  clickBut1(){
    if (this.state.class !== "button-clicked"){
      this.setState({
        class1: "button-clicked"
      })
    } else {
      this.setState({
        class1: "button"
      })
    }
  }

  clickBut2(){
    if (this.state.class !== "button-clicked"){
      this.setState({
        class2: "button-clicked"
      })
    } else {
      this.setState({
        class2: "button"
      })
    }
  }

  clickBut3(){
    if (this.state.class !== "button-clicked"){
      this.setState({
        class3: "button-clicked"
      })
    } else {
      this.setState({
        class3: "button"
      })
    }
  }

  clickBut4(){
    if (this.state.class !== "button-clicked"){
      this.setState({
        class4: "button-clicked"
      })
    } else {
      this.setState({
        class4: "button"
      })
    }
  }

render() {
  return (
    <div class="questionBlock">
      <h2>{this.props.question}</h2>
      <div class="answers">
        <form onSubmit={this.props.onClickOne}>
          <button onClick={this.clickBut1} class={this.state.class1}>{this.props.answer1}</button>
        </form>
        <form onSubmit={this.props.onClickTwo}>
          <button onClick={this.clickBut2} class={this.state.class2} >{this.props.answer2}</button>
        </form>
        <form onSubmit={this.props.onClickThree}>
          <button onClick={this.clickBut3} class={this.state.class3}>{this.props.answer3}</button>
        </form>
        <form onSubmit={this.props.onClickFour}>
          <button onClick={this.clickBut4} class={this.state.class4}>{this.props.answer4}</button>
        </form>
      </div>
    </div>
  )
}

}

export default Quiz
