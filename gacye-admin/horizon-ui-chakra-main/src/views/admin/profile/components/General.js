// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        General Information
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Executive Director
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Title'
          value='Executive Director'
        />
        <Information
          boxShadow={cardShadow}
          title='Main Location'
          value='Atlanta, GA'
        />
        <Information
          boxShadow={cardShadow}
          title='Role'
          value='Administrator'
        />
        <Information
          boxShadow={cardShadow}
          title='Organization'
          value='GACYE'
        />
      </SimpleGrid>
    </Card>
  );
}
