import React, { Component } from "react"
import './RecShow.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

import MapRs from './MapRs.js'
import RecTable from './RecTable.js'

class RecShow extends Component {
  constructor(props){
    super(props)
    this.state={
      hist: []
    }
  }

  componentWillMount(){
    axios.get(`https://indecisive-chef-api.herokuapp.com/api/rec/${this.props.rec}`)
    .then((res) => {
      this.setState({
        hist: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render(){
    return (
      <div class="rec">
        <h2>Your Food Recommendation is:</h2>
        <h2>{this.props.rec}</h2>
        <p>Click on Pin to See Restaurant Information</p>
        <Link to="/quiz">
          <button class="retake" onClick={this.props.retakeQuiz}>Retake Quiz</button>
        </Link>
        <MapRs
          recs={this.props.recs}
          position={[this.props.lat, this.props.lng]}
          food={this.props.rec}
        />
        <RecTable
          hist={this.state.hist}
        />
      </div>
    )
  }



}

export default RecShow
