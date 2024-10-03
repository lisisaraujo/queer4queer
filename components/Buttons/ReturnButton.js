import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import styled from "styled-components";

export default function ReturnButton() {
  const iconStyles = {
    color: "#d3d3d3", // Updated to match the app's label color
    fontSize: "2em",
    cursor: "pointer",
  };
  return (
    <StyledButton>
      <Link href="/">
        <IoIosArrowRoundBack style={iconStyles} />
      </Link>
    </StyledButton>
  );
}

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px; /* Increased size for better usability */
  height: 48px; /* Increased size for better usability */
  background-color: rgba(75, 0, 130, 0.8); /* Accent color */
  border: none;
  border-radius: 50%; /* Rounded button */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: rgba(75, 0, 130, 1); /* Darker accent color on hover */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }
`;