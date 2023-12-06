import Layout from "../../components/Layout";
import GlobalStyle from "../../styles/GlobalStyle";
import ReturnButton from "../../components/Buttons/ReturnButton";
import Header from "../../components/Header";
import styled from "styled-components";

export default function Contact() {
  const name = "About us";
  return (
    <>
      <title>Ressources</title>
      <Header>Ressources</Header>

      <>
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
    </>
  );
}

const StyledSection = styled.div`
  height: 100%;
  margin-top: 30%;
  width: auto;
  color: black;

  .description {
    margin: 0% 10%;
  }
`;
