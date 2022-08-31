import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"


//images
import design from "../../img/images/design2.jpg"
import web from "../../img/images/webdev.jpg"
import marketing from "../../img/images/marketing.jpg"

//Framer motion animation
import {motion} from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim,
  sliderContainer, slider, movieContainer } from '../../framer-motion/animation';

import { useScroll } from "../../components/scroll/UseScroll.component"
import ScrollTop from '../../components/scroll/ScrollTop.component'






const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: '#EA9215' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show">

        
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        <Frame5 variants={slider}></Frame5>
      </motion.div>
      <Movie variants={movieContainer}>
        <motion.h2 variants={fade}>Website Development</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="#">
          <Hide>
            <motion.img variants={photoAnim} src={web} alt="athlete" />
            <H3>We create websites for all purpose</H3>
            <H3>Website SEO - Make your website popular</H3>
            <H3>Web Marketting including Google Ads</H3>
            <H3>Registering Your business on Google Map</H3>
          </Hide>
        </Link>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element}
        variants={movieContainer}
        animate={controls}
        initial="hidden"
      >
        <h2>Graphic Design</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="#">
          <Hide>
          <img src={design} alt="Seo" />
          <H3>Flyers for all purpose</H3>
          <H3>Logo Design</H3>
          <H3>Envelope Design</H3>
          <H3>Brouchers Design</H3>
          <H3>Banners</H3>
          <H3>Business Cards</H3>
          </Hide>
        </Link>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element2}
        variants={movieContainer}
        animate={controls2}
        initial="hidden"
      >
        <h2>DIGITAL MARKETTING</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="#">
          <Hide>
          <img src={marketing} alt="good-times" />
          <H3>Social Media Ads and Sponsorship</H3>
          <H3>Reach 10k customers</H3>
          <H3>Google Ads and Sponsorship</H3>
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};








// FRAMER AND STYLED COMPONENTS 

const Work = styled(motion.div)`
  min-height: 30vh;
  overflow: hidden;
  padding: 5rem 10rem;
  text-align: center;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #4E3C23;
    margin-bottom: 3rem;
  }
  img {
    width: 50vh;
    height: 50vh;
    border-radius: 500%;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const H3 = styled.h3`
color: #4E3C23;
font-size: 1.5rem;
word-spacing: 0.2rem;
margin-top: 10px;
`
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #4E3C23;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #EA9215;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

const Frame5 = styled(Frame1)`
  background: #020c03;
`;

export default OurWork;
