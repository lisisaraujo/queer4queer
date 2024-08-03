import React from "react";
import Modal from "react-modal";
import CommentForm from "../Forms/CommentForm";
import { useRouter } from "next/router";
import { CgMathPlus } from "react-icons/cg";
import styled from "styled-components";
import CustomModal from "./CustomModal";
import useSWR, { mutate } from "swr";

const closeButtonStyle = {
  color: "whitesmoke",
  backgroundColor: "transparent",
  marginTop: "5%",
  marginLeft: "85%",
  fontSize: "1.2em",
  border: "none",
};
Modal.setAppElement("div");

export default function ModalCommentForm({
  loadComments,
  setSelectedAgeOptions,
  setSelectedGenderOptions,
  setSelectedsexualOrientationOption,

  setSelectedBipocOption,
  selectedsexualOrientationOption,
  selectedAgeOptions,
  selectedGenderOptions,
  selectedBipocOption,
  desiredApplyFunction
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

  async function handleSubmitComment(event) {
    event.preventDefault();

    // Extracting data from the form
    const formData = new FormData(document.getElementById("comment-form"));

    // Constructing the newComment object manually
    const newComment = {
      location: id,
      comment: formData.get("comment"),
      age: formData.get("age"),
      bipoc: formData.get("bipoc"),
      gender: formData.getAll("gender"), // Use getAll for multiselect fields
      sexual_orientation: formData.getAll("sexual_orientation"), // Use getAll for multiselect fields
    };

    // Adding date to the comment
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
    newComment.date = currentDate;

    // Sending the comment to the server
    const response = await fetch("/api/comments/create", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }

    // Reset the form
    // document.getElementById("comment-form").reset();
    setSelectedAgeOptions([]);
    setSelectedGenderOptions([]);
    setSelectedsexualOrientationOption([]);
    setSelectedBipocOption([]);

    closeModal();
    loadComments();
    mutate(`/api/comments/${id}`);
  }

  return (
    <>
      <StyledButton>
        <CgMathPlus style={iconStyles} onClick={openModal} />
      </StyledButton>

      <CustomModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        title="Share experience"
        applyText="Submit"
        cancelText="Cancel"
        desiredApplyFunction={handleSubmitComment}
      >
        <button onClick={closeModal} style={closeButtonStyle}>
          X
        </button>
        <CommentForm
        
          locationID={id}
          closeModal={closeModal}
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
          desiredApplyFunction={handleSubmitComment}
        />
      </CustomModal>
    </>
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
