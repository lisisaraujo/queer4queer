import { useState, useEffect, useRef } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import styled from "styled-components";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = ["About", "Contact", "Feedback", "Ressources", "Admin"];
  const iconStyles = {
    color: "#F5A9B8", // Labels color
    width: "24px",
    height: "24px",
    cursor: "pointer",
  };
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={menuRef}>
      <DropdownButton onClick={() => setIsOpen((prev) => !prev)}>
        <HiMenuAlt1 style={iconStyles} />
        {isOpen ? (
          <AiOutlineCaretUp className="icon" />
        ) : (
          <AiOutlineCaretDown className="icon" />
        )}
      </DropdownButton>
      {isOpen && (
        <DropdownMenuList>
          {menuList.map((item) => (
            <DropdownMenuItem key={item}>
              <Link href={`/menu/${item.toLowerCase()}`}>{item}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuList>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  border-radius: 8px;
`;

const DropdownButton = styled.button`
  background-color: transparent; // Make background transparent
  padding: 8px; // Reduce padding
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1rem;
  color: #F5A9B8; // Labels color
  border: none; // Remove border
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(75, 0, 130, 0.1); // Add subtle hover background
  }

  .icon {
    margin-left: 8px;
  }
`;

const DropdownMenuList = styled.div`
  background-color: rgba(28, 28, 28, 0.9); // Base color with opacity
  opacity: 0.9;
  position: absolute;
  top: 48px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownMenuItem = styled.div`
  width: 100%;
  padding: 12px 16px;
  border-left: 4px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4d96ef; // Accent color
    border-left-color: #F5A9B8; // Labels color
  }

  a {
    font-weight: bold;
    color: #F5A9B8; // Labels color
    text-decoration: none;
  }
`;