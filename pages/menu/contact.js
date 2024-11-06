import Layout from "../../components/Layout";
import GlobalStyle from "../../styles/GlobalStyle";
import ReturnButton from "../../components/Buttons/ReturnButton";
import Header from "../../components/Header";
import styled from "styled-components";

export default function Contact() {
  return (
    <Layout>
      <GlobalStyle />
      <title>Contact</title>
      <Header>Contact</Header>

      <StyledSection>
        <section className="description">
          <p>
            If you have any constructive feedback, reports, or requests for improving the app, we’d love to hear from you! Feel free to reach out at <a href="mailto:queer4queer@proton.me">queer4queer@proton.me</a>. Your input is invaluable as we continue to enhance this platform together!
          </p>
        </section>
      </StyledSection>
      <ReturnButton />
    </Layout>
  );
}

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  background-color: #1c1c1c; /* Base color */
  color: #d3d3d3; /* Labels color */
  text-align: start;

  .description {
    max-width: 80vw;
    background: rgba(255, 255, 255, 0.05); /* Light background with opacity */
    padding: 30px;
    border-radius: 12px; /* Rounded corners */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 1.8;
    color: #F5A9B8; /* Text color */
  }

  a {
    color: #91c8f6; /* Link color */
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #f5a9b8; /* Hover color */
    }
  }
`;