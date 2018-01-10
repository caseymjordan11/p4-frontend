import React, { Component } from "react"
import {Link} from 'react-router-dom'
import "./Header.css"

class Header extends Component {
  render() {
    return (
    <div>
      <nav>
        <div class="title">
          <h1>Title</h1>
          <Link to="/quiz">Take Quiz Again</Link>
        </div>
      </nav>
    </div>
    )
  }
}

export default Header
