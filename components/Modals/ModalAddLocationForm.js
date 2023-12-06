import React, { useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import AddPlaceForm from "../Forms/AddPlaceForm";
import AddLocationButton from "../Buttons/AddLocationButton";
import CustomModal from "./CustomModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    background: "rgba(252, 252, 253, 0.9)",
    width: "100%",
    height: "100%",
  },
};

Modal.setAppElement("div");

export default function ModalAddLocationForm({ loadLocations }) {
  const router = useRouter();
  const { id } = router.query;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("add-location-form"));
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
    } else {
      console.error(`Error: ${response.status}`);
    }

    loadLocations();
    document.getElementById("add-location-form").reset();
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
        desiredCancelFunction={closeModal}
        desiredApplyFunction={handleSubmit}
      >
        <AddPlaceForm
          locationID={id}
          closeModal={closeModal}
          loadLocations={loadLocations}
          // handleSubmit={handleSubmit}
        />
      </CustomModal>
    </>
  );
}
