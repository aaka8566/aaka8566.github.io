import { Box,VStack,HStack, Text, Flex } from '@chakra-ui/react'
import React from 'react'

const Techskills = () => {
  return (
    <Box id='skills' margin={'3rem'}>
<Text  margin={'3rem'} fontSize={'3xl'} fontWeight={'extrabold'}>Technical Skills</Text>
<Flex gap={'4rem'}>
<VStack className="skills-card" w={'25%'}>
    <Box h={'15%'}><Text className="skills-card-name" fontSize={'2xl'} fontWeight={'semibold'}>Languages</Text></Box>


  <Box h={'70%'} w={'50%'}>
  <Box ><img className="skills-card-img" src="./js.png" alt="" /></Box>
  <Box   ><img className="skills-card-img" src="./ts.png" alt="" /></Box>
  </Box>


  <Box h={'15%'}><Text>My favorite languages for software engineering</Text></Box>
</VStack>
<VStack className="skills-card" w={'25%'}>
  <Box h={'15%'}><Text className="skills-card-name" fontSize={'2xl'} fontWeight={'semibold'}>Front-End</Text></Box>


<Box h={'70%'}>
<HStack><Box><img src="./html.png" alt="" /></Box>
  <Box><img className="skills-card-img" src="./css.png" alt="" /></Box></HStack>
  <HStack><Box><img className="skills-card-img" src="./react.png" alt="" /></Box>
  <Box><img className="skills-card-img" src="./next.png" alt="" /></Box></HStack>
</Box>


  <Box h={'15%'}> <Text>My preferred technologies for front-end web development and component design.</Text></Box>
</VStack>
<VStack className="skills-card" w={'25%'}>
  <Box h={'15%'}><Text className="skills-card-name" fontSize={'2xl'} fontWeight={'semibold'}>Backend</Text></Box>
  
  <Box h={'70%'} w={'70%'}>
  <Box ><img className="skills-card-img" src="./ex.png" alt="" /></Box>
  <Box ><img className="skills-card-img" src="./mongodb.png" alt="" /></Box>
  </Box>
  
  <Box h={'15%'}><Text>My preferred technologies for back-end web programming and database architecture.</Text></Box>
</VStack>
<VStack className="skills-card" w={'25%'}>
  <Box h={'15%'}><Text className="skills-card-name" fontSize={'2xl'} fontWeight={'semibold'}>Tools</Text></Box>
  
<Box h={'70%'} margin={'auto'}  w={'50%'}>
<Box><img className="skills-card-img" src="./git.png" alt="" /></Box>
  <Box ><img className="skills-card-img" src="./github.png" alt="" /></Box>
</Box>

  <Box h={'15%'}><Text>My favorite tools for version control, code editing, and container orchestration.</Text></Box>
</VStack>
</Flex>
    </Box>
  )
}

export default Techskills