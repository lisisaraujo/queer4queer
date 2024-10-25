import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import ModalFilterHomepage from "./Modals/ModalFilterHomepage";
import { FaSearchLocation, FaTimes } from "react-icons/fa";

export default function Navbar({
  handleCategoryChange,
  clearCategoryFilter,
  selectedCategory,
  setSelectedCategory,
  loadLocations,
  searchTerm,
  setSearchTerm,
  locations, // Pass filtered locations from MyMap
  onSelectLocation // Pass selection handler
}) {
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter locations based on search term
  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm(''); // Clear the search term
    setShowSearch(false); // Hide the dropdown
  };

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
              <SearchContainer ref={searchContainerRef}>
                <SearchInputWrapper>
                  <SearchInput
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {/* Clear Search Button */}
                  {searchTerm && (
                    <ClearButton onClick={clearSearch}>
                      <FaTimes />
                    </ClearButton>
                  )}
                </SearchInputWrapper>
                {/* Show dropdown with filtered locations only if searchTerm is not empty */}
                {searchTerm && filteredLocations.length > 0 && (
                  <DropdownList>
                    {filteredLocations.map((location) => (
                      <DropdownItem key={location._id} onClick={() => onSelectLocation(location)}>
                        {location.name} {location.city && ", " + location.city}
                      </DropdownItem>
                    ))}
                  </DropdownList>
                )}
              </SearchContainer>
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
  background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for a modern look */
  color: #F5A9B8; /* Labels color */
  border: none; /* Removed border for a cleaner look */
  cursor: pointer;

  transition: background 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    background: rgba(91, 206, 250, 0.6); /* Streets color with opacity for hover effect */
  }
`;

const SearchContainer = styled.div`
  position: absolute;
  top: 60px; /* Position below the navbar */
  right: 20px; /* Align with the right padding of the navbar */
  z-index: 1100; /* Higher z-index to overlay other elements */
  width: 300px; /* Adjust width as needed */
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%; /* Full width of the wrapper */
  padding: 10px 40px 10px 10px; /* Add padding to the right for the clear button */
  border-radius: 4px;
  border: 1px solid #6a0dad;
  background: rgba(28, 28, 28, 0.9);
  color: #F5A9B8;
  z-index: 1;

  &:focus {
    outline: none;
    border-color: rgba(91, 206, 250, 0.6);
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #F5A9B8;
  cursor: pointer;

  &:hover {
    color: #FF6B6B; /* Change color on hover for visibility */
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 40px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  border: 1px solid #6a0dad; /* Streets color */
  border-radius: 4px;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const DropdownItem = styled.li`
  padding: 10px;
  color: #F5A9B8; /* Labels color */
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(91, 206, 250, 0.6); /* Hover color */
  }
`;