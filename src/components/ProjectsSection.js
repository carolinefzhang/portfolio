import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "My Store",
    description:
      "A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js).",
    getImageSrc: () => require("../images/my-store.png"),
    url: "https://my-store.carolinedev.work/",
  },
  {
    title: "Selective Practice",
    description:
      "A project designed to help users practice challenging questions from Scholarly trial tests. 🔥️",
    getImageSrc: () => require("../images/selective-practice.png"),
    url: "https://selective-practice.carolinedev.work/",
  },
  {
    title: "Serverless CDK Project",
    description:
      "This project creates a complete serverless architecture using AWS CDK with Python.",
    getImageSrc: () => require("../images/serverless.png"),
    url: "https://github.com/carolinefzhang/serverless-cdk-project",
  },
  {
    title: "UI Components",
    description:
      "A few React applications that I built to practice and improve my React skills.",
    getImageSrc: () => require("../images/ui-components.png"),
    url: "https://ui-components.carolinedev.work/",
  },
  {
    title: "Vanlife",
    description:
      "A van rental platform built with React frontend and Django REST API backend.",
    getImageSrc: () => require("../images/vanlife.png"),
    url: "https://vanlife.carolinedev.work/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2,minmax(0,1fr))" }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
