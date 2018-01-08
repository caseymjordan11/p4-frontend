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
      <form onSubmit={this.props.onClick}>
        <button class="button">{this.props.answer1}</button>
      </form>
      <form onSubmit={this.props.onClick}>
        <button class="button">{this.props.answer2}</button>
      </form>
      <form onSubmit={this.props.onClick}>
        <button class="button">{this.props.answer3}</button>
      </form>
      <form onSubmit={this.props.onClick}>
        <button class="button">{this.props.answer4}</button>
      </form>

      </div>
    </div>
  )
}

}

export default Quiz
