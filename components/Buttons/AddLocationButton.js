import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";
import Link from "next/link";

export default function AddLocationButton({ openModal }) {
  const iconStyles = {
    color: "#d3d3d3", // Labels color
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
  border-radius: 50%; // Changed to 50% for a perfect circle
  background: rgba(28, 28, 28, 0.9); // Base color with opacity
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for a modern look
  color: #d3d3d3; // Labels color
  border: none; // Removed border for a cleaner look
  cursor: pointer;
  transition: background 0.3s ease; // Smooth transition for hover effect

  &:hover {
    background: rgba(75, 0, 130, 0.8); // Streets color with opacity for hover effect
  }
`;