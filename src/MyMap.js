import React from "react"
import { createStore } from 'redux'
import tableData from './reducer'


const store = createStore(tableData);
store.subscribe(() => {console.log("got it!!")});

const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lon }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);



class DemoApp extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [],
     datas: [{id: 1, lat: 10, lon: 20}, {id: 2, lat: 10, lon: 20}, {id: 3, lat: 10, lon: 20}, {id: 4, lat: 10, lon: 20}, {id: 5, lat: 10, lon: 20}, {id: 6, lat: 10, lon: 20}]
     })
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json")
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: this.state.datas });
      });
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    )
  }
}


export default DemoApp;