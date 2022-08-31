import {React, useState} from 'react'

import {motion} from "framer-motion";

//passing title as a prop
const Toggle = ({children, title}) => {

    const [toggle, setToggle] = useState(false)

    const buttonToggle = () => {

        setToggle(() => !toggle)
      }



  return (
    <motion.div layout className='question'  onClick={buttonToggle} >

        <motion.h4 layout>{title}</motion.h4>

      { toggle ? children : ''}

        {/* this is the line layout */}

      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  )
} 

export default Toggle
