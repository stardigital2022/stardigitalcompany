import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import { MovieState } from "../../movieState"

//importing Motions 

import {motion} from "framer-motion";
import { pageAnimation } from '../../framer-motion/animation';



const MovieDetails = () => {

    const navigate = useNavigate();

    //taken the url from the history
    const url = navigate.location.pathname;

    const [movies, setMovies] = useState(MovieState)
    const [movie, setMovie] = useState(null)

    //useEffect

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url )
        console.log(movie)
        setMovie(currentMovie[0])
    }, [movies, url])


  return ( 
    <>
    { (movie) && 
        <Details exit="exit" variants={pageAnimation}
         initial="hidden" animate="show"
         style={{background: "#fff"}}>
        <Headline>{movie.title}
        <img src={movie.mainImg} alt="movie" />
        </Headline>
        <Awards>
            {
                movie.awards.map((award) => (
                    <Award key={award.title}
                     title={award.title} 
                    description={award.description} />
                ))
            }
        </Awards>
            
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="movie" />
            </ImageDisplay>

        </Details>

    }

    </>
  )
}


//styled component

const Details = styled(motion.div)`
color: white;
    
`;

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1500px){
        display: block;
        margin: 2rem 2rem;
    }
`;


const AwardStyle = styled.div`
    padding: 5rem;

    h3{
        font-size: 2rem;
    }

    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }

    p{
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;




//awards component

const Award = ({title, description}) => {
    <AwardStyle>
        <h3>{title}</h3>
        <div className='line' ></div>
        <p>{description}</p>
    </AwardStyle>
}




export default MovieDetails
