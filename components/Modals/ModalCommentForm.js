import React from "react";
import { useRouter } from "next/router";
import { CgMathPlus } from "react-icons/cg";
import styled from "styled-components";
import Modal from "react-modal";
import CustomModal from "./CustomModal";
import CommentForm from "../Forms/CommentForm";
import useSWR, { mutate } from "swr";

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
      <StyledButton onClick={openModal}>
        <CgMathPlus style={iconStyles} />
      </StyledButton>

      <CustomModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        title="Share experience"
        applyText="Submit"
        cancelText="Cancel"
        desiredApplyFunction={handleSubmitComment}
      >
        <ModalContent>
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
        </ModalContent>
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