import React, { Component } from "react"
import {Link} from 'react-router-dom'


class RecList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    var rList
    if (this.props.recs) {
      rList = this.props.recs.map(rest => {
        let name = rest["name"]
        return(
          <div>
            <a href={rest["url"]}>{name}</a>
          </div>
        )
      })
  }

    return(
      <div>
        <h3>Restaurant Recommendations:</h3>
        <ul>
          {rList}
        </ul>
      </div>
    )
  }
}


export default RecList
