import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import AddPlaceForm from "../Forms/AddPlaceForm";
import AddLocationButton from "../Buttons/AddLocationButton";
import CustomModal from "./CustomModal";

export default function ModalAddLocationForm({ mutateLocations }) {
  const router = useRouter();
  const { id } = router.query;

  const [modalIsOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const newLocation = Object.fromEntries(formData);

    const response = await fetch("/api/locations/create", {
      method: "POST",
      body: JSON.stringify(newLocation),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      mutateLocations();
    } else {
      console.error(`Error: ${response.status}`);
    }

    formRef.current.reset();
    closeModal();
  }

  return (
    <>
      <AddLocationButton openModal={openModal} />

      <CustomModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        title="Add Location"
        applyText="Submit"
        cancelText="Cancel"
        desiredApplyFunction={handleSubmit}
        desiredCancelFunction={closeModal}
      >
        <AddPlaceForm locationID={id} handleSubmit={handleSubmit} formRef={formRef} />
      </CustomModal>
    </>
  );
}