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
        <div className="title">Queer2Queer</div>
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
  justify-content: space-around;
  position: sticky;
  top: 0;
  width: 100%;
  height: 54px;
  gap: 20px;
  flex-shrink: 0;
  color: rgba(16, 24, 40, 1);
  background: rgba(252, 252, 253, 0.9);

  .title {
    display: flex;
    align-items: center;
    color: #101828;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
  }
  .navbar-left {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    color: #101828;
    /* font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; */

    @media (max-width: 320px) {
      justify-content: center;
    }
  }

  .navbar-right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: rgba(16, 24, 40, 1);
    margin-right: 10%;

    @media (max-width: 320px) {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 10px;
    }
  }

  .filter-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
