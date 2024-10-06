import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    background: "rgba(28, 28, 28, 0.9)",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "80%",
    height: "90vh",
    overflow: "auto",
    pointerEvents: "auto"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    pointerEvents: "auto"
  }
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
    color: #F5A9B8; /* Labels color */
    background: transparent;
    border-bottom: 1px solid #6a0dad; /* Streets color */
    padding-bottom: 10px;
  }

  .title {
    text-align: center;
    flex-grow: 1;
  }

  .close-btn {
    font-size: 1.5rem;
    color: #F5A9B8; /* Labels color */
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
    color: #F5A9B8; /* Labels color */
    overflow: auto;
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
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .apply-button {
    background: #6a0dad; /* Streets color */
    color: #F5A9B8; /* Labels color */

    &:hover {
      background: rgba(91, 206, 250, 0.6); /* Darker shade for hover effect */
      box-shadow: 0px 0px 10px 2px rgba(123, 31, 162, 0.75);
    }
  }

  .cancel-button {
    background: #1c1c1c; /* Base color */
    color: #F5A9B8; /* Labels color */

    &:hover {
      background: #333; /* Slightly lighter shade for hover effect */
      box-shadow: 0px 0px 10px 2px rgba(51, 51, 51, 0.75);
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    .header {
      padding-bottom: 8px;
    }

    .apply-button,
    .cancel-button {
      padding: 8px;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    .header {
      padding-bottom: 6px;
    }

    .apply-button,
    .cancel-button {
      padding: 6px;
      font-size: 0.75rem;
    }
  }
`;