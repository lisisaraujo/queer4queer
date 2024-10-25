import React, { useState } from "react";
import { useRouter } from "next/router";
import { CgMathPlus } from "react-icons/cg";
import styled from "styled-components";
import Modal from "react-modal";
import CustomModal from "./CustomModal";
import CommentForm from "../Forms/CommentForm";
import { mutate } from "swr";

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

  const [modalIsOpen, setIsOpen] = useState(false);
  const [guidelineIsOpen, setGuidelineIsOpen] = useState(false);

  function openGuideline() {
    setGuidelineIsOpen(true);
  }

  function closeGuideline() {
    setGuidelineIsOpen(false);
  }

  function openModal() {
    setGuidelineIsOpen(false);
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
      <StyledButton onClick={openGuideline}>
        <CgMathPlus style={iconStyles} />
      </StyledButton>

      <CustomModal
        isOpen={guidelineIsOpen}
        closeModal={closeGuideline}
        title="Guidelines for Comments"
        applyText="GOT IT"
        cancelText="Cancel"
        desiredApplyFunction={openModal}
        desiredCancelFunction={closeGuideline}
        shouldCloseOnOverlayClick={false}
      >
        <ModalContent>
          <p>Please follow these guidelines when leaving a comment:</p>
          <ul>
            <li>Be respectful and considerate.</li>
            <li>Avoid using offensive language.</li>
            <li>Provide constructive feedback.</li>
            <li>Share your genuine experiences.</li>
          </ul>
        </ModalContent>
      </CustomModal>

      <CustomModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        title="Share experience"
        applyText="Submit"
        cancelText="Cancel"
        desiredApplyFunction={handleSubmitComment}
        desiredCancelFunction={closeModal}
        shouldCloseOnOverlayClick={false}
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
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%; // Changed to 50% for a perfect circle
  background: rgba(28, 28, 28, 0.9); // Base color with opacity
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for a modern look
  color: #F5A9B8; // Labels color
  border: none; // Removed border for a cleaner look
  cursor: pointer;
  transition: background 0.3s ease; // Smooth transition for hover effect

  &:hover {
    background: rgba(91, 206, 250, 0.6); // Streets color with opacity for hover effect
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