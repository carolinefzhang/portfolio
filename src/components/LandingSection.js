import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const avatarUrl = "https://avatars.githubusercontent.com/u/18608152?v=4";
const greeting = "Hello, I am Caroline!";
const bio1 = "A software developer";
const bio2 = "proficient in Python, JavaScript, React, PHP and more";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack w={"100%"} p={16} spacing={8} textAlign="center">
      <Avatar src={avatarUrl} name="Caroline" size="2xl" />          
      <Text>{greeting}</Text>
      <Heading as="h2">{bio1}</Heading>
      <Heading as="h2">{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
