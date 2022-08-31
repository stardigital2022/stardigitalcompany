//logo

import logo from "../../img/logo/logo_transparent.png"


//Navigation components
import { motion } from "framer-motion";
import { Outlet, Link, useLocation } from "react-router-dom"

//import styled component
import styled from 'styled-components';


const Nav = () => {

    const {pathname} = useLocation();

  return (
    <>
    <StyledNav>
    <ul>
        <Link id="logo_img" to='/' >
          <img src={logo} alt="Digital Star Logo"  />
          <H6>Star Digital</H6>
        </Link>

            <li>
            <Link  to='work'>
                Our Work
            </Link> 
            <Line transition={{duration: 0.76}} 
            initial={{ width: "0%"}} animate={{width: pathname === "/work" ? "50%" : "0%" }} 
            />
            
            </li>


            <li>
            <Link  to='contact'>
                Contact Us
            </Link>
            <Line transition={{duration: 0.76}} 
            initial={{ width: "0%"}} animate={{width: pathname === "/contact" ? "50%" : "0%" }} 
            />
            
            </li>


            <li>
            <Link  to='ourclient'>
                Our Clients
            </Link>
            <Line transition={{duration: 0.76}} 
            initial={{ width: "0%"}} animate={{width: pathname === "/ourclient" ? "50%" : "0%" }} 
            />
            
            </li>

            
            <li>
            <Link  to='market'>
                Buy and Sell
            </Link>
            <Line transition={{duration: 0.76}} 
            initial={{ width: "0%"}} animate={{width: pathname === "/market" ? "50%" : "0%" }} 
            />
            
            </li>


            {/* <li>
            <Link  to='services'>
                What We Do
            </Link>
            <Line transition={{duration: 0.76}} 
            initial={{ width: "0%"}} animate={{width: pathname === "/services" ? "50%" : "0%" }} 
            />
            
            </li> */}


        </ul>


    </StyledNav>

    <Outlet />

    </>
  )
}








// Navigation Styles component

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #4E3C23;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 5;

    a{
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
        align-items: center;
    }

    img {
        /* font-size: 1.5rem;
        font-family: "Lobster", cursive, sans-serif;
        font-weight: lighter; */
        width: 50px;
        height: 50px;
        border-radius: 30%;
    }


    li {
        padding-left: 10rem;
        position: relative;
    }

    @media (max-width: 1500px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-between;
      width: 100%;
      height: 3rem;
      li {
        padding: 0;
      }
    }
  }
`;

const H6 = styled.h6`
  font-family: 'Lobster Two','Montserrat',sans-serif;
  font-size: 0.9rem;
  color: #B27218;
`

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1500px) {
    left: 0%;
  }
`;


export default Nav
