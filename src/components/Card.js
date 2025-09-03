import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" spacing={4} borderRadius="lg" color="black" overflow="hidden" alignItems="flex-start">
      <Image src={imageSrc} borderRadius="lg"/>
      <VStack p={4} spacing={2} alignItems="flex-start">
        <Heading as="h3" size="md">{title}</Heading>
        <Text color="gray.600" fontSize="sm">{description}</Text>
        <HStack spacing={2}>
          <Text fontWeight="bold" color="blue.900" fontSize="sm">See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
