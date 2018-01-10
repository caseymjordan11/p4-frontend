import React, { Component } from "react"
import './RecShow.css'

import RecList from './RecList.js'
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
        <RecList
          recs={this.props.recs}
        />
        <MapRs
          recs={this.props.recs}
        />
      </div>
    )
  }



}

export default RecShow
