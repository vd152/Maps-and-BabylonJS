import React from "react";
import * as mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
mapboxgl.accessToken =
  `${process.env.REACT_APP_API}`;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }
  state = {
    long: 77.0927,
    lat: 28.6442 ,
    zoom: 5,
  };

  componentDidMount() {
    const { long, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [long, lat],
      zoom: zoom,
      preserveDrawingBuffer: true
    });
    map.on("move", () => {
      this.setState({
        long: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );
  }
  render() {
    return (
      <div>
        <div className="sidebar">
          Longitude: {this.state.long} | Latitude: {this.state.lat} | Zoom:{" "}
          {this.state.zoom}
        </div>
        <div ref={this.mapContainer} className="map-container" id="map"/>
      </div>
    );
  }
}

export default Map;
