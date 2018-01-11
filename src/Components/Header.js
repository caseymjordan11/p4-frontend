import React, { Component } from "react"
import {Link} from 'react-router-dom'
import "./Header.css"

class Header extends Component {
  render() {
    return (
    <div>
      <nav>
        <div class="title">
          <h1>Indecisive Chef</h1>
        </div>
      </nav>
    </div>
    )
  }
}

export default Header
