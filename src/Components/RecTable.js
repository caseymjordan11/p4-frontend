import React, { Component } from "react"

import TableRow from './TableRow.js'

class RecTable extends Component {
  constructor(props){
    super(props)
  }

  render() {
    var rList
    if (this.props.hist) {
      rList = this.props.hist.map(r => {
         return(
           <div>
              <
                TableRow r={r}
              />
           </div>
         )
      })
    }
    return(
      <div>
        <h2>Recently Accepted Recommendations</h2>
        {rList}
      </div>
    )
  }
}

export default RecTable
