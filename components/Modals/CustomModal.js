import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    background: "rgba(28, 28, 28, 0.8)", // Base color with opacity
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "80%",
    height: "90vh", // Increased height to 90% of the viewport height
    overflow: "auto"
  },
};

Modal.setAppElement("div");

export default function CustomModal({
  isOpen,
  closeModal,
  title,
  children,
  applyText,
  cancelText,
  desiredApplyFunction,
  desiredCancelFunction
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <StyledModal>
        <div className="header">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="close-btn">
            <button onClick={closeModal}>
              <IoIosClose />
            </button>
          </div>
        </div>
        <div className="modal-content">{children}</div>
        <div className="apply-cancel-btns">
          <button className="apply-button" onClick={desiredApplyFunction}>
            {applyText}
          </button>
          <button className="cancel-button" onClick={desiredCancelFunction}>
            {cancelText}
          </button>
        </div>
      </StyledModal>
    </Modal>
  );
}

const StyledModal = styled.div`
  padding: 20px;

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #d3d3d3; /* Labels color */
    background: transparent;
    border-bottom: 1px solid #4b0082; /* Streets color */
    padding-bottom: 10px;
  }

  .title {
    text-align: center;
    flex-grow: 1;
  }

  .close-btn {
    font-size: 1.5rem;
    color: #d3d3d3; /* Labels color */
    background: none;
    border: none;
    cursor: pointer;
  }

  h1 {
    margin: 0;
    font-size: 1.25rem;
  }

  .modal-content {
    margin-top: 20px;
    color: #d3d3d3; /* Labels color */
  }

  .apply-cancel-btns {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .apply-button,
  .cancel-button {
    width: 48%;
    padding: 10px;
    border-radius: 4px;
    border: none;
    font-family: Inter, sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
  }

  .apply-button {
    background: #4b0082; /* Streets color */
    color: #d3d3d3; /* Labels color */
  }

  .cancel-button {
    background: #1c1c1c; /* Base color */
    color: #d3d3d3; /* Labels color */
  }
`;