import React, { Component } from "react"
import './RecShow.css'

import MapRs from './MapRs.js'

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
      </div>
    )
  }



}

export default RecShow
