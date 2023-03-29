import React from 'react'
import {  useColorMode } from '@chakra-ui/color-mode'
import { Box, Flex,  Text } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';


const Gitinfo = () => {
    const {colorMode}=useColorMode();
  return (
    <Box  border={'px solid green'} margin={'auto'} w={'90%'}>
        <Box margin={'auto'} w={'100%'} border={'px solid grey'}>
            <Box margin={'2rem'}><Text fontWeight={'extrabold'} fontSize={'3xl'}>My Statistics</Text></Box>
        <Flex justifyContent={'space-around'} margin={'2rem'}>
        <img
              src={
                colorMode === "dark"
                  ? "https://github-readme-stats.vercel.app/api?username=aaka8566&show_icons=true&locale=en&theme=tokyonight"
                  : "https://github-readme-stats.vercel.app/api?username=aaka8566&show_icons=true&locale=en"
              }
              alt="stats"
            />
            <img
        
              src={
                colorMode === "dark"
                  ? "https://streak-stats.demolab.com/?user=aaka8566&theme=dark"
                  : "https://streak-stats.demolab.com/?user=aaka8566"
              }
              alt="contribution"
            />
            </Flex>
            </Box>
            <Box margin={'2.5rem'}>
            <Box><Text fontWeight={'extrabold'} fontSize={'3xl'} margin={'2rem'}>My Github Calendar</Text></Box>
           <Box display={'grid'} justifyContent={'center'} border={'px solid pink'} width={'100%'}> <GitHubCalendar  username="aaka8566" /></Box>
            </Box>
<Box>
<Box  margin={'2.5rem'}><Text fontSize={'3xl'} fontWeight={'extrabold'}>Github Contribution Graph</Text></Box>
         <Box border={'px solid brown'} margin={'auto'}  display={'grid'} justifyContent={'center'} w={'60%'} alignItems={'center'}>  <img
            width={'100%'}
              src="https://github-readme-activity-graph.cyclic.app/graph?username=aaka8566&theme=gotham"
              alt=""

            />
            </Box> 
            </Box>
    </Box>
  )
}

export default Gitinfo