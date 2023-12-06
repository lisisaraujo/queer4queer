import React from "react";
import Modal from "react-modal";
import CommentFilter from "../Filters/CommentFilter";
import { useRouter } from "next/router";
import { IoFilter } from "react-icons/io5";
import styled from "styled-components";
import CustomModal from "./CustomModal";
import CategoryCheckboxFilter from "../Filters/CategoryCheckboxFilter";
const customModalStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    background: "rgba(77, 150, 239, 0.8)",
    borderRadius: "10px",
    width: "80%",
    height: "80%",
    boxShadow: "0 1px 2px rgba(0,0,0,.1)",
  },
};
const closeButtonStyle = {
  color: "whitesmoke",
  backgroundColor: "transparent",
  marginTop: "5%",
  marginLeft: "85%",
  fontSize: "1.2em",
  border: "none",
};

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
      <StyledButton>
        <IoFilter style={iconStyles} onClick={openModal} />
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
        <button onClick={closeModal} style={closeButtonStyle}>
          X
        </button>
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
          handleApplyFilter={handleApplyFilter}
        />
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
