import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";
import Link from "next/link";

export default function AddLocationButton({ openModal }) {
  const iconStyles = {
    color: "black",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    cursor: "pointer",
  };

  return (
    <>
      <StyledButton onClick={openModal}>
        <IoIosAdd style={iconStyles} />
      </StyledButton>
    </>
  );
}

export const StyledButton = styled.button`
  display: flex;
  position: fixed;
  bottom: 30px;
  right: 30px;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 68px;
  background: rgba(252, 252, 253, 0.9);
  box-shadow: 3px 7px 6px 2px rgba(0, 0, 0, 0.16);
  color: rgba(252, 252, 253, 0.7);
`;
