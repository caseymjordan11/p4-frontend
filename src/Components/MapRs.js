import React, { Component } from "react"
import Map from "pigeon-maps"
import Marker from "pigeon-marker"

class MapRs extends Component {
  constructor(props) {
    super(props)
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  onMarkerClick(e) {
    this.props.alert(e.payload[0])
  }

  render() {
    var Markers
    if (this.props.recs) {
      Markers = this.props.recs.map(r => {
        return (
          <Marker
            key={`marker_${r.name}`}
            anchor={Object.values(r.coordinates)}
            payload={[r]}
            onClick={this.onMarkerClick}
          />
        )
      })
    }

    return (
      <div class="map">
        <Map
          width={800}
          height={600}
          defaultCenter={[42.3508463503656,-71.0620657727122]}
          defaultZoom={13}
          zoomOnMouseWheel={false}
        >
          {Markers}
        </Map>
      </div>
    )
  }
}


export default MapRs
