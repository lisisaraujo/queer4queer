import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Modal from "react-modal";
import { BiMessageSquareAdd } from "react-icons/bi";
import LocationDetails from "../LocationDetails";

export default function ModalLocationDetails({
  locations,
  loadLocations,
  locationName,
  loadComments,
}) {
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      background: "rgb(35, 35, 35)",
      borderRadius: "10px",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("div");

  const router = useRouter();
  const { id } = router.query;
  const iconStyles = { color: "black", fontSize: "2.5em", cursor: "pointer" };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    ////
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="location-link">
        <a href="#" onClick={openModal}>
          {locationName}
        </a>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <LocationDetails />
      </Modal>
    </div>
  );
}

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  /* margin-left: 80%;
  margin-bottom: 80%; */
  position: relative;
`;
