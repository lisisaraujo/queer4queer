import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        
  font-family: 'Montserrat', sans-serif;
  // font-weight: lighter;
  text-decoration: none;


    }
  
      body, div#__next {
        height: 100%;
        width: 100%;
        background-color: #F6F5F8;
        // display: flex;
        color: #101828;
      
      }



 .mapboxgl-popup-content{
  background: rgba(252, 252, 253, 0.9);

     /* background: white;  */
     /* border-radius: 3px; */
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    padding: 10px 10px;
    pointer-events: auto;
    position: relative;
    opacity: 0.9; 
    color: black;
    font-size: 1.2em;
 }

 .mapboxgl-popup-close-button {
    background-color: transparent;
    border: 0;
    border-radius: 0 3px 0 0;
    cursor: pointer;
    position: absolute;
    right: 6%;
    top: -3px;
    color: black;
}

/* a:-webkit-any-link {
    color:white;
    cursor: pointer;
    text-decoration: none;
}  */



.ReactModal__Overlay--after-open {
    position: fixed;
    inset: 0px;
    background-color: rgba(35, 35, 35, 0.75);
  }


`;

export default GlobalStyle;
