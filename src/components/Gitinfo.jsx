import React from 'react'
import {  useColorMode } from '@chakra-ui/color-mode'
import { Box, Flex,  Stack,  Text } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';


const Gitinfo = () => {
    const {colorMode}=useColorMode();
  return (
    <Box  border={'px solid green'} margin={'auto'} w={'90%'}>
        <Box margin={'auto'} w={'100%'} border={'px solid grey'}>
            <Box margin={'2rem'}><Text fontWeight={'extrabold'} fontSize={'3xl'}>My Statistics</Text></Box>
        <Stack direction={["column","column","row"]} justifyContent={'space-around'} margin={'2rem'}>
        <img
       id="github-stats-card"
              src={
                colorMode === "dark"
                  ? "https://github-readme-stats.vercel.app/api?username=aaka8566&hide=contribs,prs"
                  : "https://github-readme-stats.vercel.app/api?username=aaka8566&hide=contribs,prs"
              }
              alt="stats"
            />
            <img
        id="github-streak-stats"
              src={
                colorMode === "dark"
                  ? "https://github-readme-streak-stats.herokuapp.com?user=aaka8566"
                  : "https://github-readme-streak-stats.herokuapp.com?user=aaka8566"
              }
              alt="contribution"
            />
            </Stack>
            </Box>
            <Box margin={'2.5rem'}>
            <Box><Text fontWeight={'extrabold'} fontSize={'3xl'} margin={'2rem'}>My Github Calendar</Text></Box>
           <Box display={'grid'} justifyContent={'center'} border={'px solid pink'} width={'100%'}> <GitHubCalendar class="react-activity-calendar"   username="aaka8566" /></Box>
            </Box>
<Box>
<Box  margin={'2.5rem'}><Text fontSize={'3xl'} fontWeight={'extrabold'}>Top Languages</Text></Box>
         <Box border={'px solid brown'} margin={'auto'}  display={'grid'} justifyContent={'center'} w={'90%'} alignItems={'center'}>  <img
        
         id="github-top-langs"
            width={'500vh'}
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=aaka8566&hide_progress=true"
              alt="memo"

            />
            </Box> 
            </Box>
    </Box>
  )
}

export default Gitinfo