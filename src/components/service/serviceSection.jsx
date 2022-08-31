import React from 'react'

//import the styled component
import styled from "styled-components";


//import images
import home2 from "../../img/images/portfolio1.jpg"


//Import the style from the Style-Component

import { About, Description, Image } from "../../styles"


// import { useInView } from 'react-intersection-observer';
// import { useAni mation } from 'framer-motion'
import { fade } from "../../framer-motion/animation"

//import icons
import clock from "../../img/clock.svg"
import diaphragm from "../../img/diaphragm.svg"
import money from "../../img/money.svg"
import teamwork from "../../img/teamwork.svg"

// useScroll imported
import { useScroll } from "../scroll/UseScroll.component"




const ServiceSection = () => {

    // const controls = useAnimation(); 

    // const [element, view] = useInView({threshold: 0.5});

    // if(view) {
    //     controls.start('show')
    // } else {
    //     controls.start('hidden')
    // }

    const [element, controls ] = useScroll();

  return (
    <Services variants={fade} animate={controls} initial="hidden" ref={element} >
      <Description>
        <h2>We Offer High <span>quality</span> services</h2>
        <Cards>
            <Card>
                <div className="icon">
                     <img src={clock} alt="clock" />
                     <h3>Efficient</h3>
                </div>
                <p>We do efficient work</p>
            </Card>

            <Card>
                <div className="icon">
                     <img src={teamwork} alt="Teamwork" />
                     <h3>Teamwork</h3>
                </div>
                <p>We do a teamwork</p>
            </Card>

            <Card>
                <div className="icon">
                     <img src={diaphragm} alt="Diaphragm" />
                     <h3>Diaphragm</h3>
                </div>
                <p>We do a diaphragm work</p>
            </Card>

            <Card>
                <div className="icon">
                     <img src={money} alt="Money" />
                     <h3>Affordable</h3>
                </div>
                <p>Our Price are affordable</p>
            </Card>

        </Cards>

      </Description>

        <Image>
            <img src={home2} alt="Section" />
        </Image>

    </Services>
  )
}

 

//Styles components

const Services = styled(About)`

    h2{
        padding-bottom: 5rem;
        
    }

    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;



const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    @media (max-width: 1300px){
        justify-content: center;
}
`;


const Card = styled.div`
    flex-basis: 20rem;
    

    .icon{
        display: flex;
        align-items: center;
        
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
} `;



export default ServiceSection
