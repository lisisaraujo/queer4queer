import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";

export default function AddLocationButton({ openModal }) {
  const iconStyles = {
    color: "#F5A9B8", // Labels color
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
  border-radius: 50%; 
  background: rgba(91, 206, 250, 0.7); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  color: #F5A9B8; // Labels color
  border: none; 
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
     background-color: rgba(91, 206, 250, 0.9); 
  }
`;