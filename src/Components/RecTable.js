import React, { Component } from "react"

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
             <h4><strong><a href={r.url}>{r.name}</a></strong></h4>
             <h4>{r.food}</h4>
             <h4>{r.city}</h4>
             <h4>{r.rating}</h4>
           </div>
         )
      })
    }
    return(
      <div>
        {rList}
      </div>
    )
  }
}

export default RecTable
