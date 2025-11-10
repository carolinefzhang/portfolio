import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack bg="white" borderRadius="lg" color="black" overflow="hidden" alignItems="flex-start" justifyContent="space-between" height="100%"  >
      <a href={url} target="_blank"><Image src={imageSrc} borderRadius="lg" border={"none"} /></a>
      <VStack p={4} spacing={2} alignItems="flex-start">
        <Heading as="h3" size="md">{title}</Heading>
        <Text color="gray.600" fontSize="sm">{description}</Text>
        <HStack spacing={2}>
          <Text fontWeight="bold" color="blue.900" fontSize="sm"><a href={url} target="_blank">See More</a></Text>
          <a href={url} target="_blank"><FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
