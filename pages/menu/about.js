import Layout from "../../components/Layout";
import GlobalStyle from "../../styles/GlobalStyle";
import ReturnButton from "../../components/Buttons/ReturnButton";
import Header from "../../components/Header";
import styled from "styled-components";
import Head from "next/head";

export default function AboutUs() {
  return (
    <Layout>
      <GlobalStyle />
      <Head>
        <title>About</title>
      </Head>
      <Header>About</Header>
      <StyledSection>
        <section className="description">
          <p>
            The Queer4Queer map project is designed for users to explore queer and queer-friendly spaces worldwide!
            Additionally, users can add and browse various locations that identify as such and share their experiences—both the highs and lows.
          </p>
          <p>
            One of the standout features of this project is its ability to filter experiences based on demographic data.
            This helps create a clearer picture of the experiences people encounter and help users make more informed decisions before heading out.
          </p>
          <p>
            The comment section highlights that it&apos;s not just about mapping locations; it&apos;s about building a community resource where everyone can contribute new spaces that resonate with the queer community, fostering connection and inclusivity.
          </p>
          <p>
            This project originated from research conducted by a group in the Master&apos;s program in Intercultural Conflict Management at Alice Salomon University of Applied Sciences Berlin.
            Focused on themes of gatekeeping, accessibility, queer safety, and intersectional awareness, the research inspired a tool designed to bridge gaps within the queer community.
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
  text-align: center;

  .description {
    max-width: 800px;
    background: rgba(255, 255, 255, 0.05); /* Light background with opacity */
    padding: 30px;
    border-radius: 12px; /* Rounded corners */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 1.8;
    color: #ffffff; /* Text color */
    margin-bottom: 20px; /* Space between paragraphs */
  }
`;