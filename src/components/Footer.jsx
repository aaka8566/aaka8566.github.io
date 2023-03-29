import { Box, Button, Flex,  Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import {FaLocationArrow} from "react-icons/fa"
import {BiPhoneCall} from "react-icons/bi"
import {BsFillEnvelopeAtFill} from "react-icons/bs";

import styles from "../styles/Footer.css"
const Footer = () => {
  return (
    
   <Box id='Contacts' w={'80%'} margin={'auto'} marginTop={'4rem'}>
    <Text fontSize={'4xl'} color={'blue'}>---------Contact me---------</Text>
            <Flex margin={'4rem'} justifyContent={'space-between'}>
<Stack border={'px solid blue'} w={'40%'} marginTop={'3rem'} gap={'3rem'}>
<Flex border={'px solid green'}  >
<Box fontSize={'3rem'} w={'25%'} border={'px solid blue'}  >
<FaLocationArrow  />
</Box>
<Box textAlign={'left'}>
<Text fontSize={'2xl'} fontWeight={'bold'}>Address</Text>
<Text>Patna,Bihar-800024</Text>
</Box>
</Flex>
<Flex >
  <Box fontSize={'3rem'} w={'25%'} border={'px solid blue'}>
<BiPhoneCall/>
</Box>
<Box textAlign={'left'}>
<Text fontSize={'2xl'} fontWeight={'bold'}>Contact Me</Text>
<Text>9973130197</Text>
</Box>
</Flex>
<Flex   >
  <Box fontSize={'3rem'} w={'25%'} border={'px solid blue'}>
<BsFillEnvelopeAtFill/>
</Box>
<Box textAlign={'left'}>
<Text fontSize={'2xl'} fontWeight={'bold'}>Email</Text>
<Text >aakash8566@gmail.com</Text>
</Box>
</Flex>
</Stack>

<Box w={'50%'} border={'px solid pink'}>
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
            </Flex>
        </Box>
     
    )
}

export default Footer;