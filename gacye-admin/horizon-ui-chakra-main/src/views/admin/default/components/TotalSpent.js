import Card from "components/card/Card.js";
import React from "react";
import GoogleMapReact from "google-map-react";
export default function TotalSpend(){

  
  var dummyHeat = {
    positions: [
      {lat: 33.763396, lng: -84.392070},
      {lat: 33.874496, lng: -84.351704},
      {lat: 33.855572, lng: -84.2220874},
      {lat: 33.753934, lng: -84.376680},
      {lat: 33.706702, lng: -84.272611},
      {lat: 33.868813, lng: -84.464098},
      {lat: 33.813493, lng: -84.177462},
      {lat: 33.763575, lng: -84.163784},
      {lat: 33.827326, lng: -84.273206},
      {lat: 33.827326, lng: -84.273206},
      {lat: 33.786313, lng: -84.373707},
      {lat: 33.813493, lng: -84.177462},
      {lat: 33.763575, lng: -84.163784},
      {lat: 33.827326, lng: -84.273206},
      {lat: 33.786313, lng: -84.373707},
      {lat: 33.8322262, lng: -84.381438},
      {lat: 33.795704, lng: -84.326727},
      {lat: 33.7774945, lng: -84.356461},
      {lat: 33.761103, lng: -84.420687},
      {lat: 33.728466, lng: -84.389763},
      {lat: 33.723026, lng: -84.410577},
      {lat: 33.723026, lng: -84.410577},
      {lat: 33.723026, lng: -84.410577},    
    ],
    options: {   
      radius: 20,   
      opacity: 0.6
    }
  }
  

  const defaultProps = {
    center: {
      lat: 33.763396,
      lng: -84.392070
    },
    zoom: 11
    
  };

  return (
    // Important! Always set the container height explicitly
    <Card
        justifyContent='center'
        align='center'
        direction='column'
        w='800px'
        mb='0px'>
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB6IN5uyLhb9KindBo0z_iVGgoFmY0ovCY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        heatmap={dummyHeat}
        heatmapLibrary={true}
        >
      </GoogleMapReact>
    </div>
    </Card>
  );
  }