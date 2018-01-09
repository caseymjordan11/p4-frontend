import React, { Component } from "react"
import "./Quiz.css"

class Delivery extends Component {
  constructor(props) {
    super(props)
  }

render() {
  return (
    <div class="questionBlock">
      <h2>{this.props.question}</h2>
      <div class="answers">
        <form onSubmit={this.props.onClickOne}>
          <button class="button">{this.props.answer1}</button>
        </form>
        <form onSubmit={this.props.onClickTwo}>
          <button class="button">{this.props.answer2}</button>
        </form>
      </div>
    </div>
  )
}

}

export default Delivery
