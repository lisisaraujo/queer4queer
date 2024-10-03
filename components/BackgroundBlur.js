import React from "react";
import styled from "styled-components";

const BackgroundBlur = ({ backgroundImageUrl }) => {
  return <StyledBackground backgroundImageUrl={backgroundImageUrl} />;
};

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place the background behind other content */
  background-image: url(${(props) => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(10px); /* Apply the blur effect */
  opacity: 0.7; /* Adjust the opacity as needed */
  transition: opacity 0.3s ease; /* Smooth transition for opacity change */
`;

export default BackgroundBlur;