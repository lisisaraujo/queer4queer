import ReturnButton from "./Buttons/ReturnButton";
import styled from "styled-components";

export default function Header({ children }) {
  return (
    <>
      <HeaderWrapper>
        <div className="return-button">
          <ReturnButton />
        </div>

        <div className="title">
          <h3>{children}</h3>
        </div>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.nav`
  display: flex;
  width: auto;
  height: 53px;
  padding: 16px 24px 16px 16px;
  align-items: center;
  gap: 81px;
  flex-shrink: 0;
  background-color: #e4effd;

  .title {
    color: #101828;
    font-feature-settings: "clig" off, "liga" off;

    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
  }
`;
