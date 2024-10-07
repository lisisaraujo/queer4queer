import Layout from "../../components/Layout";
import GlobalStyle from "../../styles/GlobalStyle";
import ReturnButton from "../../components/Buttons/ReturnButton";
import Header from "../../components/Header";
import styled from "styled-components";

export default function AboutUs() {
  return (
    <>
      <title>About</title>
      <Header>About</Header>

      <StyledSection>
        <section className="description">
          <p>
            The Queer4Queer map project, born from a university research group in Berlin, aims to understand what influences queer individuals' choices in visiting specific locations. This initiative allows users to explore queer and queer-friendly spaces throughout the city, providing a platform to browse locations and share personal experiences—both positive and negative—just as one would with a friend. The focus is on helping fellow queers gain insight into the types of experiences others have had in these spaces, enabling them to make informed choices before visiting. Users can filter experiences by demographic data, offering a clearer picture of who frequents each venue and what kinds of experiences they encounter. This community-driven resource invites everyone to contribute new spaces frequented by the queer community, fostering connection and inclusivity.
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
  }
`;