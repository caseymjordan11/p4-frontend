import React, { Component } from "react"

import './TableRow.css'


class TableRow extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div class = "row">
        <div class = "show">
          <h4><strong><a href={this.props.r.url}>{this.props.r.name}</a></strong></h4>
         </div>
         <div class = "show">
          <h4>{this.props.r.phone}</h4>
          </div>

          <div class = "show">
          <h4>{this.props.r.city}</h4>
          </div>

          <div class = "show">
          <h4>{this.props.r.rating}</h4>
          </div>
      </div>
    )
  }


}

export default TableRow
