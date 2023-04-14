// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
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

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (
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
