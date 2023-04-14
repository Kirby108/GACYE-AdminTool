import Card from "components/card/Card.js";
import React from "react";
import GoogleMapReact from "google-map-react";
export default function TotalSpend(){

  var dummyHeat = {
    positions: [
      {lat: 33.763396, lng: -84.392070},
      {lat: 33.763396, lng: -84.392070},
      {lat: 33.763396, lng: -84.392070},
      {lat: 33.763396, lng: -84.392070}],
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
        heatmapLibrary={true}          
        heatmap={dummyHeat} 
      >
      </GoogleMapReact>
    </div>
    </Card>
  );
  }