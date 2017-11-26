import React from "react"
import { createStore } from 'redux'
import tableData from './reducer'
import {connect} from "react-redux";

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
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9y7LnW9USj3ucakOe6EkFknPg0cmVZpk&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `70vh` }} />,
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
    defaultCenter={{ lat: 0, lng: 0 }}
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

   buildMarkers(array){
    if(array){
        var justMarkers = array.slice(1)
        var markers = [];
        justMarkers.forEach(function(tableRow){
            if(tableRow[2]){
                var sampleSize = tableRow[2]
                for (var j = 0; j < sampleSize; j++) {
                var idGenerated = Math.floor((Math.random() * 1000000000) + 1);
                markers.push ({id: idGenerated, lat: Number(tableRow[1]), lon: Number(tableRow[0])})
                }
             }
        })
        return markers;
     }
  }

  calcMarkers(){
    var markers = []
    if(this.props.tableData.data){
      markers = this.buildMarkers(this.props.tableData.data)
    }else{
      var iniData = [["Longitude","Latitude","Number of pins"],[10,11,12],[20,11,14],[30,15,12]]
      markers = this.buildMarkers(iniData)
    }
    return markers;
  }

  render() {
    var markers = this.calcMarkers()
    return (
      <MapWithAMarkerClusterer markers={markers} />
    )
  }
}

const mapStateToProps = (state) => {
    return {tableData: state.tableData}
};

export default connect(mapStateToProps)(DemoApp);