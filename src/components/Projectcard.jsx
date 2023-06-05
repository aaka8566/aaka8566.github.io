import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Text,
    useColorMode,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
//   import { LightSpeed } from "react-reveal";
//   import { Roll } from "react-reveal";
  import { BsGithub } from "react-icons/bs";
  import { TbUnlink } from "react-icons/tb";
  import AOS from "aos";
  import "aos/dist/aos.css";
  
  const ProjectCard = ({
    index,
    project_img,
    project_img_dark,
    tech_stack,
    title,
    description,
    link,
    github,
  }) => {
    React.useEffect(() => {
      AOS.init();
    }, []);
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Box
      className="project-card"
        color={{ base: "black", dark: "white" }} // change text color based on color mode
        bg={{ base: "gray.50", dark: "gray.800" }} // change background color based on color mode
        borderRadius="md"
        overflow="hidden"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        _hover={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}>
        <Image
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          marginBottom="1rem"
          // data-aos="fade-down-right"
          // src={project_img}
          src={colorMode === "dark" ? project_img : project_img}
          alt={title}
          w="100%"
        />
        <Box
          padding="1rem"
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
          <Heading className="project-title" size="md" marginBottom="0.5rem">
            {/* <LightSpeed left>{title}</LightSpeed> */}
            {title}
          </Heading>
          <Text className="project-description" marginBottom="1rem">{description}</Text>
          <HStack marginBottom="1rem" className="project-tech-stack">
            {tech_stack.map((tech,i) => (
         
                <Image
                key={i+2}
                  h={{ base: "24px", md: "32px" }}
                  w={{ base: "24px", md: "32px" }}
                  src={tech.url}
                  alt={tech.name}
                />
           
            ))}
          </HStack>
  
          <HStack spacing="1rem">
            <a className="project-deployed-link" href={link} target="_blank" rel="noreferrer">
              <Button
                variant={"outline"}
                colorScheme="blue"
                size={{ base: "sm", md: "md" }}
                leftIcon={<TbUnlink />}>
                Check it out!
              </Button>
            </a>
            <a className="project-github-link" href={github} target="_blank" rel="noreferrer">
              <Button
                variant={"outline"}
                colorScheme="blue"
                size={{ base: "sm", md: "md" }}
                leftIcon={<BsGithub />}>
                Github Link
              </Button>
            </a>
          </HStack>
        </Box>
      </Box>
    );
  };
  
  export default ProjectCard;
  