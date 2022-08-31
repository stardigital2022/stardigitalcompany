import React from 'react'
//import aboutsection
import ServiceSection from '../../components/service/serviceSection'

import AboutSection from '../../components/about/about-section.component'

import FaqSection from '../../components/faq/faqSection.component'

import ScrollTop from '../../components/scroll/ScrollTop.component'

//importing Motions 

import {motion} from "framer-motion";
import { pageAnimation } from '../../framer-motion/animation';

const AboutUs = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation}
     initial="hidden" animate="show" >
      <AboutSection />

      <ServiceSection />

      <FaqSection />
      <ScrollTop />
    </motion.div>
  )
}

export default AboutUs
