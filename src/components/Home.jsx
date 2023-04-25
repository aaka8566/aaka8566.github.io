import { Box } from '@chakra-ui/react'
import React from 'react'
import Nav from './Navbar'
import Introdiv from './Introdiv'
import Techskills from './Techskills'
import Projects from './Projects'
import Gitinfo from './Gitinfo'
import Footer from './Footer'

const Home = () => {
  return (
    <Box id='home'>
     <Nav/>
     <Introdiv/>
     <Techskills/>
     <Projects/>
     <Gitinfo/>
     <Footer/>    
    </Box>
  )
}

export default Home