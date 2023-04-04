import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react';
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa"
import Resume from "../Resume/Aakash_Chakravarty_Resume.pdf"
import styles from "../styles/Introdiv.module.css";
const Introdiv = () => {
  return (
    <Box id="about"  className="about section" bgColor={'rgb(38,104,170)'}  paddingTop={'4rem'}>
      <Text textAlign={'center'} marginBottom={'-3rem'} className={styles.white} fontSize={'4xl'}>About</Text>
    <Flex border={'px solid grey'}>
<Box className={styles.image} width={'100%'} border={'px solid green'}>
    <img margin={'10rem'} className="home-img" src={'/profile.jpg'} width={'80%'} alt="memo" />
</Box>
<Box className={styles.text} border={'px solid blue'}>
<Text textAlign={'left'} className={styles.white} fontSize={'5xl'}>Hi</Text>
<Text id="user-detail-name" textAlign={'left'} className={styles.white} fontSize={'5xl'}>I'm Aakash Chakravarty</Text>
<div className={styles.flipBox}><div className={styles.flip} >
  <div><div>Quick learner</div></div>
  <div><div>Adaptable </div></div>
  <div><div>Problem Solver</div></div>
  <div><div>Quick learner </div></div>
  <div><div>Adaptable</div></div>
  <div><div>Problem Solver </div></div>
</div>
</div>
<Text id="user-detail-intro" noOfLines={[1, 2, 3,4]} marginTop={'1rem'} textAlign={'left'} className={styles.white} fontSize={'1xl'}>
A highly motivated Front Developer with extensive knowledge of HTML,CSS,JavaScript, React js,and Next js. Experienced in developing, testing, and deploying frontend applications. Highly organized and detail-oriented, with the ability to quickly understand complex requirements and work in a fast paced environment. Dedicated to providing excellent customer service and meeting project deadlines.
</Text>
</Box>
    </Flex>
    <Flex alignItems={'center'} justifyContent={'center'} gap={'5rem'} paddingBottom={'1rem'} >
    <a
    id="resume-button-2"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1v1vYxYlg6Lntui-0pEKQ_slwJPizi9DO/view?usp=sharing",
                "blank"
              );
            }}
            href={Resume}
            download="Aakash_Chakravarty_Resume"
            className={styles.buttons}
         >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Resume
          </a>
          <a
            href="https://github.com/aaka8566"
            className={styles.buttons}
            target="_blank"
            rel="noreferrer">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aakash-chakravarty-16b438141/"
            className={styles.buttons}
            target="_blank"
            rel="noreferrer">
            <FaLinkedinIn />
          </a>
    </Flex>
    </Box>
  )
}

export default Introdiv