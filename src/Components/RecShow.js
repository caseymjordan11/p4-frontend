import React, { Component } from "react"
import './RecShow.css'
import axios from 'axios'

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
    axios.get(`http://localhost:3001/api/rec/${this.props.rec}`)
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
