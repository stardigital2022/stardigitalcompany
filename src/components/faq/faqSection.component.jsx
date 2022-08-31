import {React} from 'react'

//Styles component
import styled from 'styled-components'

//Framer Motion
import { AnimateSharedLayout } from "framer-motion";


import {About} from "../../styles"

import Toggle from '../toggle/toggle.component'


import { useScroll } from "../scroll/UseScroll.component"

import { scrollReveal } from "../../framer-motion/animation"


const FaqSection = () => {

  const [element, controls] = useScroll();

  return (
    <Faq variants={scrollReveal} ref={element} animate={controls} initials="hidden" >
      <h2>Any Questions <span>FAQ</span></h2>
    
<AnimateSharedLayout>
      <Toggle title='Do you design flyers and logo?'>
        <div className="answer">
            <p>Yes please, we do. We design flyers for all events, parties, schools, businesses and brands.</p>
            <p>Kindly reach us.</p>
        </div>

    

</Toggle>


<Toggle title='How long do you take to develop websites?'>
        <div className="answer">
            <p>Approximately, you will have your website within 4 working weeks.</p>
            
        </div>
</Toggle>


      

<Toggle title='What is the business social media suite?'>
        <div className="answer">
            <p>The business social media suite is a business growing social media suite consists of: </p>
            <p>1. website</p> <p>2. Facebook page of 2k+ followers.</p> <p>3. Instagram Account</p> <p>3. WhatsApp profile</p> 
            <p>4. Flyers</p> <p>5. Logo</p> <p>6. Letterhead </p> <p>7. Business Card </p> <p>8. Registration of business on Google Map 
              (verified) and among others.</p>
              <p>If you order for our business social media suite, Star Digital shall offer you all the above for you to smoothly market 
                on social media. The various media platforms shall be linked together.</p>
        </div>
</Toggle>


<Toggle title='Cost of business social media suite?'>
        <div className="answer">
            <p>A chart shall be presented or send to you to choose the various social media platforms 
            needed. On such basis, the price is determined.</p>
        </div>
</Toggle>


<Toggle title='Do you accept trainees?'>
        <div className="answer">
            <p>We train people on how to market on social media, how to design, web development and among others. 
            This training is once a year and the date normally is announced on Facebook and on the Star Digital Website.</p>
        </div>
</Toggle>

  </AnimateSharedLayout>  
  
    </Faq>
  )
}


// Style components 

const Faq = styled(About)`
  display: block;
  span{
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p{
      padding: 1rem 0rem;
    }
  }



`;









export default FaqSection
