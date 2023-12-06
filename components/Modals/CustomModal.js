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
    background: "rgba(252, 252, 253, 0.5)",
    width: "100%",
    height: "100%",
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
  .header {
    width: 100%;
    height: 54px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; /* Use space-between to place the title in the center and close button on the right */
    color: #101828;
    position: fixed;
    background: rgba(252, 252, 253, 0.9);
    border-bottom: 1px solid #d0d5dd;
  }

  .title {
    text-align: center; /* Center the title text */
    flex-grow: 1; /* Allow the title to take up available space */
  }

  .close-btn {
    margin-right: 10px; /* Add some margin to the right of the close button */
    font-size: x-large;
  }

  h1 {
    margin: 0;
  }

  .apply-cancel-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .apply-button {
    display: flex;
    width: 207px;
    height: 48px;
    padding: 24px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 200px;
    border: 1px solid #4d96ef;
    background: #4d96ef;
    margin-bottom: 2%;
    color: #fcfcfd;

    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 0.9rem */
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }

  .cancel-button {
    display: flex;
    width: 207px;
    height: 48px;
    padding: 24px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 200px;
    border: 1px solid #4d96ef;
    background: #fcfcfd;
    color: #4d96ef;
    margin-bottom: 5vh;

    /* Button */
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 0.9rem */
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }
`;
