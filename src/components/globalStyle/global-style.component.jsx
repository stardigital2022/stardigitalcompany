import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    @media (max-width: 1500px){
        font-size: 75%;
    }

    
}

body {
    /* background: #282828; */
    background: #B27218;
    font-family: 'Aboreto', 'Montserrat', sans-serif;
    overflow-x: hidden;
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    font-family: 'Lobster Two', 'Montserrat', sans-serif;
    cursor: pointer;
    padding: 1rem 5rem;
    margin-right: 5rem;
    border: 3px solid #4E3C23;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color: #4E3C23;
        color: white;
    }

    @media (min-width: 1500px){
        font-size: 50%;
        margin-right: 5rem;
    }


}

h2 {
        font-weight: lighter;
        font-size: 4rem;
    }

    h3 {
        color: white;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: bold;
        /* color: #23d997;  */
        color: #4E3C23;
    }

    p {
        padding: 3rem 0rem;
        /* color: #ccc; */
        color: #050202;
        font-size: 1.4rem;
         line-height: 150%;
         font-weight: bolder;
    }

`

export default GlobalStyle;