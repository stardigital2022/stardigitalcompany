import React from 'react'

//importing Motions 

import {motion} from "framer-motion";
import { pageAnimation, titleAnim } from '../../framer-motion/animation';
import styled from 'styled-components';
import { fade } from '../../framer-motion/animation';


//Font Awesome
//import { FaFacebookSquare } from "react-icons/fa";

const ContactUs = () => {
  return (
    <ContactStyle exit="exit" 
    variants={pageAnimation}
    initial="hidden" animate="show"
    style={{background: "#B27218"}}
    >
     <Title> 
      
      <Hide>
        <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
      </Hide>
      
      </Title>

      <div>

        <Hide>
        <Social variants={titleAnim} >
          <Circle />
          <h2>Call Us Now <motion.button variants={fade}>
             <a href="tel:+233503789468"
             style={{color: "#4E3C23", fontSize: "3rem"}}> Call Us Now </a>
             </motion.button> </h2>
          
        </Social>
        </Hide>

        <Social variants={titleAnim} >
          <Circle />
          <h2>Send an Email</h2>

          <motion.button variants={fade}
            onClick={() => window.location = 'mailto:stardigitalcompany@gmail.com'}
            style={{color: "#4E3C23", fontSize: "3rem"}}>
             Email Us
             </motion.button>
          
        </Social>

        <Social variants={titleAnim} >
          <Circle />
          <h2>Follow us on Social Media</h2>
          
        </Social>
      </div>



    </ContactStyle>
  )
}


// Styled Component

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1500px){
        margin-top: 2rem ;
        padding: 2rem;
        font-size: 1rem;
    }
`;


const Title = styled.div`
  margin-bottom: 4rem;
  color: black;

  @media (max-width: 1500px){
        margin-top: 5rem;
    }
`


const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;


const Social = styled(motion.div)`

display: flex;
align-items: center;

h2{
  margin: 2rem;
}
`


export default ContactUs
