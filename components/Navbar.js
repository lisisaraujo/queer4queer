import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import ModalFilterHomepage from "./Modals/ModalFilterHomepage";

export default function Navbar({
  handleCategoryChange,
  clearCategoryFilter,
  selectedCategory,
  setSelectedCategory,
  loadLocations,
}) {
  return (
    <>
      <NavbarWrapper>
        <div className="navbar-left">
          <DropdownMenu />
        </div>
        <div className="title">Queer4Queer</div>
        <div className="navbar-right">
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
    color:#F5A9B8; /* Labels color */
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