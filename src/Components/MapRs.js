import React, { Component } from "react"
import Map from "pigeon-maps"
import Marker from "pigeon-marker"
import axios from 'axios'

import './MapRs.css'

class MapRs extends Component {
  constructor(props) {
    super(props)
    this.state={
      rest: [],
      class: "but"
    }
    this.showRest = this.showRest.bind(this)
    this.saveRec = this.saveRec.bind(this)
    this.changeBut = this.changeBut.bind(this)
  }

  saveRec(e){
    e.preventDefault()
    axios.post('https://indecisive-chef-api.herokuapp.com/api/save', {
      name: this.state.rest[0],
      food: this.props.food,
      rating: this.state.rest[1],
      city: this.state.rest[2],
      phone: this.state.rest[3],
      url: this.state.rest[4]
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }

  showRest(e){
    console.log(e.payload)
    let name = e.payload[0]
    let rating = e.payload[1]
    let city = e.payload[2]
    let phone = e.payload[3]
    let url = e.payload[4]
    this.setState({
      rest: [name, rating, city, phone, url]
    })
  }

  changeBut(){
    this.setState({
      class: "but-clicked"
    })
  }

  render() {
    console.log(this.props.position)
    var Markers
    if (this.props.recs) {
      Markers = this.props.recs.map(r => {
        return (
          <Marker
            key={`marker_${r.id}`}
            anchor={Object.values(r.coordinates)}
            payload={[r.name, r.rating, r.location.city, r.phone, r.url]}
            onClick={this.showRest}
          />
        )
      })
    }

    return (
      <div class="map">
        <Map
          width={800}
          height={500}
          defaultCenter={Object.values(this.props.position)}
          defaultZoom={13}
          zoomOnMouseWheel={false}
        >
          {Markers}
        </Map>
        <div class="clicked">
            <div class = "show">
              <h4 class="label">Name:</h4>
              <h4 class="val"><a href={this.state.rest[4]}>{this.state.rest[0]}</a></h4>
            </div>
            <div class = "show">
              <h4 class="label">Phone:</h4>
              <h4 class="val">{this.state.rest[3]}</h4>
            </div>
            <div class = "show">
              <h4 class="label">City:</h4>
              <h4 class="val">{this.state.rest[2]}</h4>
            </div>
            <div class = "show">
              <h4 class="label">Rating:</h4>
              <h4 class="val">{this.state.rest[1]}</h4>
            </div>
        </div>
        <form onSubmit={this.saveRec}>
          <button onClick={this.changeBut} class = {this.state.class}>
              Save Recommendation!
          </button>
        </form>
      </div>
    )
  }
}


export default MapRs
