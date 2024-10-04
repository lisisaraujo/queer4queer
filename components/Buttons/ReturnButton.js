import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import styled from "styled-components";

export default function ReturnButton() {
  const iconStyles = {
    color: "#F5A9B8", // Updated to match the app's label color
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
  
  border: none;
  border-radius: 50%; /* Rounded button */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: rgba(91, 206, 250, 0.6); /* Darker accent color on hover */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }
`;