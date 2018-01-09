import React, { Component } from "react"
import axios from "axios"

class Geocode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      street: "",
      city: "",
      state: "",
      zipcode: "",
    }
  }

  handleStreetInput(e) {
    this.setState({
      street: e.target.value
    })
  }

  handleCityInput(e) {
    this.setState({
      city: e.target.value
    })
  }

  handleStateInput(e) {
    this.setState({
      state: e.target.value
    })
  }

  handleZipcodeInput(e) {
    this.setState({
      zipcode: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
    .get(`http://localhost:3001/api/google/${this.state.street}/${this.state.city}/${this.state.state}/${this.state.zipcode}`
    )
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h4> Set Location </h4>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <input
              type="text"
              placeholder="address"
              onChange={e => this.handleStreetInput(e)}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="city"
              onChange={e => this.handleCityInput(e)}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="state"
              onChange={e => this.handleStateInput(e)}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="zipcode"
              onChange={e => this.handleZipcodeInput(e)}
            />
          </p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Geocode
