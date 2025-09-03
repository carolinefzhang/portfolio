import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: caroline.fzhang@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/carolinefzhang",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/caroline-zhang-68978422/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const headerRef = useRef(null);
  let lastScrollY = window.scrollY;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY < lastScrollY;
      lastScrollY = window.scrollY;
      if (headerRef.current) {
        headerRef.current.style.transform = show
          ? "translateY(0)"
          : "translateY(-200px)";
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => <a href={social.url} target="_blank" key={index}><FontAwesomeIcon icon={ social.icon } size="2x"/></a>)}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
                <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
                <a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
