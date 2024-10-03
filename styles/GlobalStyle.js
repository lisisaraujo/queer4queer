import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --accent-color: #4a90e2; /* Define the accent color */
  }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  body, div#__next {
    height: 100%;
    width: 100%;
    background-color: #1c1c1c; /* Base color */
    color: #d3d3d3; /* Labels color */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .mapboxgl-popup-content {
    background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    padding: 10px;
    pointer-events: auto;
    position: relative;
    opacity: 0.9;
    color: #d3d3d3; /* Labels color */
    font-size: 1em;
    border-radius: 8px;
  }

  .mapboxgl-popup-close-button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #d3d3d3; /* Labels color */
    font-size: 1.5em;
  }

  .ReactModal__Overlay--after-open {
    position: fixed;
    inset: 0;
    background-color: rgba(35, 35, 35, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    body, div#__next {
      padding: 10px;
    }

    .mapboxgl-popup-content {
      font-size: 0.9em;
      padding: 8px;
    }

    .mapboxgl-popup-close-button {
      font-size: 1.2em;
      right: 8px;
      top: 8px;
    }
  }

  @media (max-width: 480px) {
    .mapboxgl-popup-content {
      font-size: 0.8em;
      padding: 6px;
    }

    .mapboxgl-popup-close-button {
      font-size: 1em;
      right: 6px;
      top: 6px;
    }
  }
`;

export default GlobalStyle;