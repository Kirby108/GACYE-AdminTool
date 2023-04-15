import Card from "components/card/Card.js";
import React from "react";
import GoogleMapReact from "google-map-react";
import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
export default function TotalSpend(){
  
  const textColor = useColorModeValue("secondaryGray.900", "white");
  var dummyHeat = {
    positions: [
      { lat: 33.874, lng: -84.352 },
      { lat: 33.827, lng: -84.351 },
      { lat: 33.856, lng: -84.221 },
      { lat: 33.754, lng: -84.377 },
      { lat: 33.776, lng: -84.396 },
      { lat: 33.707, lng: -84.273 },
      { lat: 33.869, lng: -84.464 },
      { lat: 33.813, lng: -84.177 },
      { lat: 33.764, lng: -84.164 },
      { lat: 33.827, lng: -84.273 },
      { lat: 33.786, lng: -84.374 },
      { lat: 33.832, lng: -84.381 },
      { lat: 33.83, lng: -84.43 },
      { lat: 33.796, lng: -84.327 },
      { lat: 33.775, lng: -84.356 },
      { lat: 33.761, lng: -84.421 },
      { lat: 33.728, lng: -84.39 },
      { lat: 33.723, lng: -84.411 },
      { lat: 33.698, lng: -84.351 },
      { lat: 33.706, lng: -84.465 },
      { lat: 33.668, lng: -84.442 },
      { lat: 33.817, lng: -84.582 },
      { lat: 33.887, lng: -84.15 },
      { lat: 33.941, lng: -84.208 },
      { lat: 33.975, lng: -84.223 },
      { lat: 33.946, lng: -84.338 },
      { lat: 33.921, lng: -84.378 },
      { lat: 33.953, lng: -84.543 },
      { lat: 33.68, lng: -84.38 },
      { lat: 33.67, lng: -84.322 },
      { lat: 34.069, lng: -84.272 },
      { lat: 34.024, lng: -84.611 },
      { lat: 33.748, lng: -84.762 },
      { lat: 33.683, lng: -84.153 },
      { lat: 33.672, lng: -84.023 },
      { lat: 33.592, lng: -84.672 },
      { lat: 34.025, lng: -84.368 },
      { lat: 33.989, lng: -84.453 },
      { lat: 34.011, lng: -84.338 },
      { lat: 35.04, lng: -85.309 },
      { lat: 30.285, lng: -81.669 },
      { lat: 35.192, lng: -80.804 },
      { lat: 38.846, lng: -76.99 },
      { lat: 41.868, lng: -87.641 },
      { lat: 40.747, lng: -73.94 },
      { lat: 38.592, lng: -90.154 },
      { lat: 41.487, lng: -81.592 },
      { lat: 42.485, lng: -83.141 },
      { lat: 38.22, lng: -85.596 },
      { lat: 35.132, lng: -89.896 },
      { lat: 33.671, lng: -84.338 }
    ],
    options: {   
      radius: 30,   
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
        w='1080px'
        h='720px'
        mb='0px'>
          <Text
          color={textColor}
          fontSize='30px'
          fontWeight='700'
          lineHeight='100%'
          mb='10px'
          >
          Heatmap
        </Text>
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