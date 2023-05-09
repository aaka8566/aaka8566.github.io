
import {
  Box,
  Flex,
  // Avatar,
  
  Button,

  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  // Center,
  Popover,
  Text,
} from '@chakra-ui/react';
import {Link} from "react-scroll"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import Resume from "../Resume/Aakash_Chakravarty_Resume.pdf"
//import styles from "../styles/Navbar.module.css"
// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     smooth={true}
//     duration={500}
//     offset={-90}
//     to={children}>
//     {children}
//   </Link>
// );
const links=["About","Skills","Projects","Contacts","Resume"]
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box  id="nav-menu" w={'100%'} position={'fixed'} bg={useColorModeValue('gray.100', 'gray.900')} px={4} zIndex={'20'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Popover>
      <Flex gap={'4rem'} children={'Click'} role='button' >
           {/* {links.map((el)=>{ */}
            {/* return el==="Resume"? */}

            
            <Link className="nav-link home" to="home" smooth={true}
  duration={1000}
  offset={-80}
  ><Text transition= {'0.2s ease-out'} fontSize={'1.5rem'} _hover={{color:'brown',fontWeight:'bold'}}>Home</Text></Link>
         
<Link className="nav-link about" to="about" smooth={true}
  duration={1000}
  offset={-80}
  ><Text transition= {'0.2s ease-out'} fontSize={'1.5rem'} _hover={{color:'brown',fontWeight:'bold'}}>About</Text></Link>

<Link className="nav-link skills" to='skills' smooth={true}
  duration={1000}
  offset={-80}
  ><Text transition= {'0.2s ease-out'} fontSize={'1.5rem'} _hover={{color:'brown',fontWeight:'bold'}}>Skills</Text></Link>

<Link className="nav-link projects" to="projects" smooth={true}
  duration={1000}
  offset={-80}
  ><Text transition= {'0.2s ease-out'} fontSize={'1.5rem'} _hover={{color:'brown',fontWeight:'bold'}}>Projects</Text></Link>

<Link className="nav-link contact" to='contact' smooth={true}
  duration={1000}
  offset={-80}
  ><Text transition= {'0.2s ease-out'} fontSize={'1.5rem'} _hover={{color:'brown',fontWeight:'bold'}}>Contact</Text></Link>

<Button
       className="nav-link resume"      
      id="resume-button-1"
            // className={styles.a}
            onmouseover="this.style.color='red'"
  onClick={() => {
    window.open(
      "https://drive.google.com/file/d/1v1vYxYlg6Lntui-0pEKQ_slwJPizi9DO/view?usp=sharing",
      "blank"
    );
  }}
  
  download="Aakash_Chakravarty_Resume"
  
> <a  id="resume-link-1" href={Resume} target="_blank" rel='noreferrer' download="Aakash_Chakravarty_Resume.pdf">Resume</a></Button>
{/* fontSize={'1.5rem'} _hover={{color:'brown',fontWeight:'bold'}} */}









          </Flex>
      </Popover>
         
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}


