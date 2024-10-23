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
            The Queer4Queer map project is an exciting initiative that emerged from a university research group at Alice Salomon University in Berlin. This project is all about understanding what influences queer individuals when they choose specific locations to visit.
            Imagine having a handy tool that lets you explore queer and queer-friendly spaces throughout the city! Users can browse various locations and share their experiences—both the highs and lows—much like chatting with a friend over coffee. The goal here is to empower fellow members of the queer community by providing insights into the types of experiences others have had in these spaces. This way, they can make informed decisions before heading out.
            One of the standout features of this project is its ability to filter experiences based on demographic data. This helps create a clearer picture of who frequents each venue and what kinds of experiences they encounter. It’s not just about mapping locations; it’s about building a community resource where everyone can contribute new spaces that resonate with the queer community, fostering connection and inclusivity.          </p>
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