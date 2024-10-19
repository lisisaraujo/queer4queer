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
  const iconStyles = {
    color: "#F5A9B8", // Labels color
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
            desiredCancelFunction={closeModal}
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
  background: rgba(28, 28, 28, 0.9); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  color: #F5A9B8; // Labels color
  border: none; 
  cursor: pointer;
  transition: background 0.3s ease; 

  &:hover {
    background: rgba(91, 206, 250, 0.6); 
  }
`;

const ModalContent = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // padding: 20px;
  // gap: 20px;

  // @media (max-width: 768px) {
  //   padding: 15px;
  //   gap: 15px;
  // }

  // @media (max-width: 480px) {
  //   padding: 10px;
  //   gap: 10px;
  // }
`;