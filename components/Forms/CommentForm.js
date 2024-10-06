import styled from "styled-components";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
  genderCategories,
  sexualOrientationCategories,
  dropDownSelectColorStyle,
  ageCategories,
  bipocCategories,
} from "../../utils";

export default function CommentForm({
  locationID,
  desiredApplyFunction,
  selectedAgeOptions,
  setSelectedAgeOptions,
  setSelectedGenderOptions,
  setSelectedsexualOrientationOption,
  setSelectedBipocOption,
  selectedsexualOrientationOption,
  selectedGenderOptions,
  selectedBipocOption,
}) {
  return (
    <FormContainer>
      <EntryForm onSubmit={desiredApplyFunction} id="comment-form">
        <input type="hidden" name="location" value={locationID} />
        <div className="comment-card">
          <label htmlFor="comment">Share your experience!</label>
          <textarea
            id="comment"
            name="comment"
            rows={6}
            maxLength={200}
            placeholder="Make it 200 characters max :)"
          />
        </div>
        <label htmlFor="comment-title">A bit about you (OPTIONAL)</label>
        <div className="demographic-data">
          <StyledFilter>
            <div className="select-box">
              <label htmlFor="age">Age</label>
              <Select
                id="age"
                name="age"
                closeMenuOnSelect={true}
                defaultValue={selectedAgeOptions}
                onChange={setSelectedAgeOptions}
                options={ageCategories}
                styles={dropDownSelectColorStyle}
                className="custom-select"
              />
            </div>
            <div className="select-box">
              <label htmlFor="sexual-orientation">Sexual Orientation</label>
              <Select
                id="sexual-orientation"
                name="sexual_orientation"
                isMulti
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                defaultValue={selectedsexualOrientationOption}
                onChange={(selectedOptions) =>
                  setSelectedsexualOrientationOption([
                    ...selectedsexualOrientationOption,
                    selectedOptions,
                  ])
                }
                options={sexualOrientationCategories}
                styles={dropDownSelectColorStyle}
                className="custom-select"
              />
            </div>
            <div className="select-box">
              <label htmlFor="gender">Gender</label>
              <Select
                id="gender"
                name="gender"
                isMulti
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                defaultValue={selectedGenderOptions}
                onChange={(selectedOptions) =>
                  setSelectedGenderOptions(selectedOptions)
                }
                options={genderCategories}
                styles={dropDownSelectColorStyle}
                className="custom-select"
              />
            </div>
            <div className="select-box">
              <label htmlFor="bipoc">BiPoc</label>
              <Select
                id="bipoc"
                name="bipoc"
                closeMenuOnSelect={true}
                defaultValue={selectedBipocOption}
                onChange={setSelectedBipocOption}
                options={bipocCategories}
                styles={dropDownSelectColorStyle}
                className="custom-select"
              />
            </div>
          </StyledFilter>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </EntryForm>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .comment-card {
    margin-bottom: 20px;
  }

  .demographic-data {
    margin-bottom: 20px;
  }

  .submit-button {
    width: 100%;
    padding: 15px;
    background-color: rgba(75, 0, 130, 0.7); /* Streets color with opacity */
    box-shadow: 0px 0px 5px 3px rgba(90, 90, 90, 0.75);
    border-radius: 10px;
    border: none;
    color: #F5A9B8; /* Labels color */
    font-size: 1.2em;
    cursor: pointer;
    transition: box-shadow 0.3s ease, background-color 0.3s ease;

    &:hover {
      box-shadow: 0px 0px 18px 2px rgba(125, 125, 125, 0.75);
      background-color: rgba(75, 0, 130, 0.9);
    }
  }

  textarea {
    width: 100%;
    background-color: rgba(28, 28, 28, 0.8); /* Base color with opacity */
    border: 1px solid #6a0dad; /* Streets color */
    padding: 15px;
    color: #F5A9B8; /* Labels color */
    border-radius: 8px;
    margin-bottom: 20px;
  }

  input {
    color: #F5A9B8; /* Labels color */
    border-radius: 5px;
    border: 1px solid #6a0dad; /* Streets color */
    padding: 10px;
    background: rgba(28, 28, 28, 0.8); /* Base color with opacity */
  }

  label {
    color: #F5A9B8; /* Labels color */
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    padding: 15px;

    .submit-button {
      font-size: 1em;
    }

    textarea {
      padding: 12px;
    }

    input {
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    .submit-button {
      font-size: 0.9em;
    }

    textarea {
      padding: 10px;
    }

    input {
      padding: 6px;
    }
  }
`;

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  .select-box {
    width: 100%;
  }

  label {
    color: #F5A9B8; /* Labels color */
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .custom-select {
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 10px;

    label {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    gap: 8px;

    label {
      font-size: 0.8rem;
    }
  }
`;