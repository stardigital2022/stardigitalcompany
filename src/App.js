import React from 'react'
//Router 
import { Routes, Route, useLocation } from "react-router-dom";


//Global Style
import GlobalStyle from './components/globalStyle/global-style.component'
 
//Framer motion
import {AnimatePresence} from "framer-motion"

//pages
import Nav from './Routes/Navigation/nav.component'
import AboutUs from './pages/about/about-us'
import ContactUs from './pages/contactUs/contact-us.component'
import OurWork from './pages/ourWork/our-work.component'
import OurClient from './pages/ourClient/Our-Clients.component';
import Market from './pages/market/market.component';
import Services from './pages/services/services.component';



import MovieDetails from './pages/MovieDetails/MovieDetails';

import ScrollTop from './components/scroll/ScrollTop.component';


const App = () => {

  const location = useLocation();


  return (
    <div>
    <GlobalStyle />

    <ScrollTop /> 

    <AnimatePresence exitBeforeEnter >    
    <Routes location={location} key={location.pathname}>
  
    <Route path='/' element={<Nav />}>

      <Route index  element={<AboutUs />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='work'  element={<OurWork />} />
      <Route path='work/:id' element={<MovieDetails />} />

      <Route path='ourclient' element={<OurClient />}/>
      <Route path='market' element={<Market />} />
      <Route path='services' element={<Services />} />

    </Route>
  
</Routes>
</AnimatePresence>
    </div>
  )
} 

export default App