import React, { Component } from "react"
import "./Quiz.css"

class Delivery extends Component {
  constructor(props) {
    super(props)
    this.state={
      class1: "button",
      class2: "button"
    }
    this.clickBut1 = this.clickBut1.bind(this)
    this.clickBut2 = this.clickBut2.bind(this)
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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.setLocation(position.coords.latitude, position.coords.longitude)
      },
      (error) => alert(error),
      {enableHighAccuracy: true}
    )
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
          <button onClick={this.clickBut2} class={this.state.class2}>{this.props.answer2}</button>
        </form>
      </div>
    </div>
  )
}

}

export default Delivery
