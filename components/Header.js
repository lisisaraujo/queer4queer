import ReturnButton from "./Buttons/ReturnButton";
import styled from "styled-components";

export default function Header({ children }) {
  return (
    <HeaderWrapper>
      <div className="return-button">
        <ReturnButton />
      </div>
      <div className="title">
        <h3>{children}</h3>
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 16px 24px;
  align-items: center;
  gap: 20px;
  background-color: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-radius: 8px; /* Rounded corners */

  .return-button {
    margin-right: auto; /* Push the title to the right */
  }

  .title {
    color: #d3d3d3; /* Labels color */
    font-feature-settings: "clig" off, "liga" off;
    font-family: Montserrat, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.25;
  }
`;