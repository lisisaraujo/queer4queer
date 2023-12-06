import { BiMessageSquareAdd } from "react-icons/bi";
import styled from "styled-components";

export default function AddCommentButton() {
  const iconStyles = { color: "black", fontSize: "2.5em", cursor: "pointer" };

  return (
    <>
      <StyledButton>
        <BiMessageSquareAdd style={iconStyles} />
      </StyledButton>
    </>
  );
}

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;
