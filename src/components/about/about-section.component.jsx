import React from 'react'



import laptop from "../../img/images/laptop.jpg"

//Importing the style component
import { About, Description, Hide, Image } from "../../styles"

//Framer Motion
import {motion} from 'framer-motion';
import "./about-section.style.scss"
//
import { titleAnim, fade, photoAnim } from '../../framer-motion/animation';

//importing Wave

import Wave from '../Wave/wave.component';


const AboutSection = () => {

  // const titleAnim = {
  //   hidden: {opacity: 0},
  //   show: {opacity: 1, transition: {duration: 2}}
  // }



  // const container = {
  //   hidden: { x: 100 },
  //   show: {x: 0, transition: {duration: 4, ease: "easeOut",  staggerChildren: 0.75, when: "beforeChildren"  }},
  // }

  return (
    <About >
      <Description>
        <motion.div  initial="hidden" animate="show" className="title">
          <Hide>
              <motion.h2 variants={titleAnim }  >With <span>Star Digital: </span> We work to make</motion.h2>
          </Hide>

          <Hide>
              <motion.h2 variants={titleAnim }  >Your <span>dreams</span> come </motion.h2>
          </Hide>

          <Hide>
              <motion.h2  variants={titleAnim } ><span>true.</span></motion.h2>
          </Hide>

        </motion.div>

        <motion.p variants={fade} >Contact us for any Project that you have.
           We have professionals that will handle it
            with ease</motion.p>

            <motion.button variants={fade}
            onClick={() => window.location = 'mailto:stardigitalcompany@gmail.com'}>
             Email Us
             </motion.button>

             <motion.button variants={fade}>
             
             <a href="tel:+233503789468"> Call Us Now </a>
             </motion.button>

      </Description>

        <Image >
          <motion.img variants={photoAnim} src={laptop} alt="Business laptop" />
        </Image>
      <Wave />
    </About>
  )
}
 

//styled components






export default AboutSection
