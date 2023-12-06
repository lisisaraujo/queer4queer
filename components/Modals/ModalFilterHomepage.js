import React from "react";
import Modal from "react-modal";
import CategoryFilter from "../Filters/CategoryFilter";
import { useRouter } from "next/router";
import { IoFilter } from "react-icons/io5";
import styled from "styled-components";
import CustomModal from "./CustomModal";
import CategoryCheckboxFilter from "../Filters/CategoryCheckboxFilter";

Modal.setAppElement("div");

export default function ModalFilterHomepage({
  setSelectedCategory,
  selectedCategory,
  loadLocations,
}) {
  const router = useRouter();
  const iconStyles = { color: "black", fontSize: "1.8em", cursor: "pointer" };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const clearCategoryFilter = () => {
    setSelectedCategory("");
    closeModal();
  };

  const handleApplyFilter = () => {
    closeModal();
    loadLocations();
  };
  return (
    <div className="flex relative justify-center">
      <StyledButton>
        <IoFilter style={iconStyles} onClick={openModal} />
      </StyledButton>

      <CustomModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        title="Type of location"
        applyText="Apply"
        cancelText="Remove Filters"
        desiredCancelFunction={clearCategoryFilter}
        desiredApplyFunction={handleApplyFilter}
      >
        <div className="flex flex-col items-center p-20 space-y-8">
          <CategoryCheckboxFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </CustomModal>
    </div>
  );
}

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;
