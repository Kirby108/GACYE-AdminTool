import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Image src="https://gacye.org/wp-content/uploads/2021/06/New-Logo.png"></Image>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
