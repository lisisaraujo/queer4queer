import React from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import { IoFilter } from "react-icons/io5";
import styled from "styled-components";
import CustomModal from "./CustomModal";
import CommentFilter from "../Filters/CommentFilter";

Modal.setAppElement("div");

export default function ModalCommentFilter({
  getFilteredList,
  loadComments,
  setSelectedAgeOptions,
  selectedAgeOptions,
  setSelectedGenderOptions,
  selectedGenderOptions,
  setSelectedsexualOrientationOption,
  selectedsexualOrientationOption,
  selectedBipocOption,
  setSelectedBipocOption,
}) {
  const router = useRouter();
  const { id } = router.query;
  const iconStyles = { color: "#101828", fontSize: "1.8em", cursor: "pointer" };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleApplyFilter() {
    closeModal();
    loadComments();
    getFilteredList();
  }

  const removeFilters = () => {
    setSelectedAgeOptions("");
    setSelectedGenderOptions("");
    setSelectedsexualOrientationOption("");
    setSelectedBipocOption("");
    closeModal();
  };

  return (
    <div>
      <StyledButton onClick={openModal}>
        <IoFilter style={iconStyles} />
      </StyledButton>

      <CustomModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        title="Filter Comments"
        applyText="Apply"
        cancelText="Remove Filters"
        desiredCancelFunction={removeFilters}
        desiredApplyFunction={handleApplyFilter}
      >
        <ModalContent>
          <CommentFilter
            locationID={id}
            closeModal={closeModal}
            getFilteredList={getFilteredList}
            loadComments={loadComments}
            setSelectedAgeOptions={setSelectedAgeOptions}
            setSelectedGenderOptions={setSelectedGenderOptions}
            setSelectedsexualOrientationOption={
              setSelectedsexualOrientationOption
            }
            setSelectedBipocOption={setSelectedBipocOption}
            selectedsexualOrientationOption={selectedsexualOrientationOption}
            selectedAgeOptions={selectedAgeOptions}
            selectedGenderOptions={selectedGenderOptions}
            selectedBipocOption={selectedBipocOption}
            desiredApplyFunction={handleApplyFilter}
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
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
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