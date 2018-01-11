import React, { Component } from "react"
import './RecShow.css'
import axios from 'axios'

import MapRs from './MapRs.js'
import RecTable from './RecTable.js'

class RecShow extends Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.recs)
    return (
      <div class="rec">
        <h1>Your food Recommendation is:</h1>
        <h2>{this.props.rec}</h2>
        <MapRs
          recs={this.props.recs}
          position={[this.props.lat, this.props.lng]}
          food={this.props.rec}
        />
        <RecTable
          hist={this.props.hist}
        />
      </div>
    )
  }



}

export default RecShow
