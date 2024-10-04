import React from "react";
import Modal from "react-modal";
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
  const iconStyles = {
    color: "#d3d3d3",
    width: "24px",
    height: "24px",
    flexShrink: "0",
    cursor: "pointer",
  };
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
        <ModalContent>
          <CategoryCheckboxFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </ModalContent>
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 15px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 10px;
  }
`;