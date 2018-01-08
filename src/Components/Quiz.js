import React, { Component } from "react"
import "./Quiz.css"

class Quiz extends Component {
  constructor(props) {
    super(props)
  }

render() {
  return (
    <div class="questionBlock">
      <h2>{this.props.question}</h2>
      <div class="answers">
        <form onSubmit={this.props.onSubmit1}>
          <button class="button">{this.props.answer1}</button>
        </form>
        <form onSubmit={this.props.onSubmit2}>
          <button class="button">{this.props.answer2}</button>
        </form>
        <form onSubmit={this.props.onSubmit3}>
          <button class="button">{this.props.answer3}</button>
        </form>
        <form onSubmit={this.props.onSubmit4}>
          <button class="button">{this.props.answer4}</button>
        </form>
      </div>
    </div>
  )
}

}

export default Quiz
