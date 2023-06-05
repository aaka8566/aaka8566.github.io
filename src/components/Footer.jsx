import { Box, Button, Flex,  Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import {FaLocationArrow} from "react-icons/fa"
import {BiPhoneCall} from "react-icons/bi"
import {BsFillEnvelopeAtFill} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa"
// import styles from "../styles/Footer.css"
import styles from "../styles/Footer.css"
const Footer = () => {
  return (
    
   <Box  id="contact" w={'80%'} margin={'auto'} marginTop={'4rem'}>
    <Text fontSize={["2xl","2xl","4xl"]} color={'blue'}>---------Contact me---------</Text>
            <Stack direction={["column","column","row"]} margin={'4rem'} justifyContent={'space-between'}>
<Stack border={'px solid blue'} w={["100%","100%","40%"]} marginTop={'2rem'} gap={'1.5rem'}>
<Flex border={'px solid green'} gap={["1.5rem","1.5rem","0.5rem"]} >
<Box fontSize={["2rem","2rem","3rem"]} w={'25%'} border={'px solid blue'}  >
<FaLocationArrow  />
</Box>
<Box textAlign={'left'}>
<Text  fontSize={["xl","2xl","2xl"]} fontWeight={'bold'}>Address</Text>
<Text>Patna,Bihar-800024</Text>
</Box>
</Flex>
<Flex gap={["1.5rem","1.5rem","0.5rem"]}>
  <Box fontSize={["2rem","2rem","3rem"]} w={'25%'} border={'px solid blue'}>
<BiPhoneCall/>
</Box>
<Box textAlign={'left'}>
<Text fontSize={["xl","2xl","2xl"]} fontWeight={'bold'}>Contact Me</Text>
<Text  id="contact-phone">9973130197</Text>
</Box>
</Flex>
<Flex   gap={["1.5rem","1.5rem","0.5rem"]}>
  <Box fontSize={["2rem","2rem","3rem"]} w={'25%'} border={'px solid blue'}>
<BsFillEnvelopeAtFill/>
</Box>
<Box textAlign={'left'}>
<Text fontSize={["xl","2xl","2xl"]} fontWeight={'bold'}>Email</Text>
<Text id="contact-email">aakash8566@gmail.com</Text>
</Box>
</Flex>

<Flex gap={["1.5rem","1.5rem","0.5rem"]}>
  <Box fontSize={["2rem","2rem","3rem"]} w={'25%'} border={'px solid blue'}>
  <a
            href="https://github.com/aaka8566"
            className={styles.buttons}
            target="_blank"
            rel="noreferrer"
            id="contact-github"
            >
            <AiFillGithub />
          </a>
</Box>
<Box textAlign={'left'}>
<a  target="blank" href="https://github.com/aaka8566"><Text fontSize={["xl","2xl","2xl"]} fontWeight={'bold'}>Github/aaka8566</Text></a>
{/* <Text  id="contact-phone">9973130197</Text> */}
</Box>
</Flex>

<Flex gap={["1.5rem","1.5rem","0.5rem"]}>
  <Box fontSize={["2rem","2rem","3rem"]} w={'25%'} border={'px solid blue'}>
  <a
            href="https://www.linkedin.com/in/aakash-chakravarty-16b438141/"
            className={styles.buttons}
            target="_blank"
            rel="noreferrer"
            id="contact-linkedin"
            >
            <FaLinkedinIn />
          </a>
</Box>
<Box textAlign={'left'}>
<a target="blank" href="https://www.linkedin.com/in/aakash-chakravarty-16b438141/"><Text fontSize={["xl","2xl","2xl"]} fontWeight={'bold'}>LinkedIn/aaka8566</Text></a>
{/* <Text  id="contact-phone">9973130197</Text> */}
</Box>
</Flex>
</Stack>

<Box w={["100%","100%","50%"]} border={'px solid pink'}>
<form
                    action="https://getform.io/f/31411231-8e73-46d8-bb3c-d9d6a6eaf5a2"
                    method="POST">
                    <input type="text" name="name" placeholder="Name" border={'1px solid black'}/>
                    <input type="email" name="email" placeholder="Email" />
                    <Textarea
                    border={'1px solid black'}
                    borderRadius={'2rem'}
                    marginBottom={'2rem'}
                    marginTop={'2rem'}
                      placeholder="Message"
                      type="text"
                      name="message"></Textarea>
                    {/* <button
                      type="submit"
                      className={styles.button}
                      formTarget="_blank">
                      {" "}
                      Send Message 
                    </button> */}
                    <Button type="submit"  formTarget="_blank" colorScheme='blue' w={'90%'} borderRadius={'3rem'}>Send Message</Button>
                  </form>
</Box>
            </Stack>
        </Box>
     
    )
}

export default Footer;