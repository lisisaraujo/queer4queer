import React, { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import ModalFilterHomepage from "./Modals/ModalFilterHomepage";
import { FaSearchLocation } from "react-icons/fa";



export default function Navbar({
  handleCategoryChange,
  clearCategoryFilter,
  selectedCategory,
  setSelectedCategory,
  loadLocations,
  searchTerm,
  setSearchTerm,
}) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <NavbarWrapper>
        <div className="navbar-left">
          <DropdownMenu />
        </div>
        <div className="title">Queer4Queer</div>
        <div className="navbar-right">
          <div className="search-icon">
            <SearchButton onClick={() => setShowSearch(!showSearch)}>
              <FaSearchLocation />
            </SearchButton>
            {showSearch && (
              <SearchInput
                type="text"
                placeholder="Search locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            )}
          </div>
          <div className="filter-icon">
            <ModalFilterHomepage
              handleCategoryChange={handleCategoryChange}
              clearCategoryFilter={clearCategoryFilter}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              loadLocations={loadLocations}
            />
          </div>

        </div>
      </NavbarWrapper>
    </>
  );
}

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  z-index: 1000;

  .title {
    color: #F5A9B8; /* Labels color */
    font-family: Montserrat, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.25;
  }

  .navbar-left,
  .navbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .navbar-left {
    justify-content: flex-start;
  }

  .navbar-right {
    justify-content: flex-end;
    position: relative;
  }

  .filter-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: #F5A9B8;
    transition: color 0.3s ease;

    &:hover {
      color: rgba(75, 0, 130, 1); /* Darker accent color on hover */
    }
  }

  .search-icon {
    display: flex;
    align-items: center;
    position: relative;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 18px;
    }

    .navbar-left,
    .navbar-right {
      gap: 8px;
    }
  }
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(28, 28, 28, 0.9); // Base color with opacity
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for a modern look
  color: #F5A9B8; // Labels color
  border: none; // Removed border for a cleaner look
  cursor: pointer;
  transition: background 0.3s ease; // Smooth transition for hover effect

  &:hover {
    background: rgba(91, 206, 250, 0.6); // Streets color with opacity for hover effect
  }
`;

const SearchInput = styled.input`
  position: absolute;
  right: 40px;
  width: 200px;
  padding: 10px;
  border: 1px solid #6a0dad; /* Streets color */
  border-radius: 4px;
  background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  color: #F5A9B8; /* Labels color */
  font-size: 1rem;
  z-index: 1;

  &:focus {
    outline: none;
    border-color: rgba(91, 206, 250, 0.6); /* Focus color */
  }
`;