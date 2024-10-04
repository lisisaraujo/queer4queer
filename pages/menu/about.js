import Layout from "../../components/Layout";
import GlobalStyle from "../../styles/GlobalStyle";
import ReturnButton from "../../components/Buttons/ReturnButton";
import Header from "../../components/Header";
import styled from "styled-components";

export default function AboutUs() {
  const name = "About us";
  return (
    <>
      <title>About Us</title>
      <Header>About Us</Header>

      <StyledSection>
        <section className="description">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
          </p>
        </section>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  color: #F5A9B8; /* Labels color */
  text-align: center;

  .description {
    max-width: 800px;
    background: rgba(255, 255, 255, 0.1); /* Light background with opacity */
    padding: 20px;
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  }

  p {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    line-height: 1.6;
  }
`;