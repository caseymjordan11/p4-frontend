import React, { Component } from "react"
import Map from "pigeon-maps"
import Marker from "pigeon-marker"
import axios from 'axios'

class MapRs extends Component {
  constructor(props) {
    super(props)
    this.state={
      rest: []
    }
    this.showRest = this.showRest.bind(this)
    this.saveRec = this.saveRec.bind(this)
  }

  saveRec(e){
    e.preventDefault()
    axios.post('http://localhost:3001/api/save', {
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
          height={600}
          defaultCenter={Object.values(this.props.position)}
          defaultZoom={13}
          zoomOnMouseWheel={false}
        >
          {Markers}
        </Map>
        <div class="clicked">
            <h4><strong><h4>Name: </h4><a href={this.state.rest[4]}>{this.state.rest[0]}</a></strong></h4>
            <h4>Phone: {this.state.rest[3]}</h4>
            <h4>City: {this.state.rest[2]}</h4>
            <h4>Rating: {this.state.rest[1]}</h4>
        </div>
        <form onSubmit={this.saveRec}>
          <button>
              Save Recommendation!
          </button>
        </form>
      </div>
    )
  }
}


export default MapRs
