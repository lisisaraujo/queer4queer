import styled from "styled-components";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
  genderCategories,
  sexualOrientationCategories,
  colorStyles,
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
          <label>
            Share your experience!
            <textarea
              name="comment"
              rows={6}
              maxLength={200}
              placeholder="Make it 200 characters max :)"
            />
          </label>
        </div>
        <label htmlFor="comment-title">A bit about you (OPTIONAL)</label>
        <div className="demographic-data">
          <StyledFilter>
            <div className="select-box">
              <label htmlFor="age">Age</label>
              <Select
                closeMenuOnSelect={true}
                defaultValue={selectedAgeOptions}
                onChange={setSelectedAgeOptions}
                options={ageCategories}
                name="age"
                styles={colorStyles}
                className="custom-select"
              />
            </div>
            <div className="select-box">
              <label htmlFor="sexual-orientation">Sexual Orientation</label>
              <Select
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
                name="sexual_orientation"
                styles={colorStyles}
                className="custom-select"
              />
            </div>
            <div className="select-box">
              <label htmlFor="gender">Gender</label>
              <Select
                isMulti
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                defaultValue={selectedGenderOptions}
                onChange={(selectedOptions) =>
                  setSelectedGenderOptions(selectedOptions)
                }
                options={genderCategories}
                name="gender"
                styles={colorStyles}
                className="custom-select"
              />
            </div>
            <div className="select-box">
              <label htmlFor="bipoc">BiPoc</label>
              <Select
                closeMenuOnSelect={true}
                defaultValue={selectedBipocOption}
                onChange={setSelectedBipocOption}
                options={bipocCategories}
                name="bipoc"
                styles={colorStyles}
                className="custom-select"
              />
            </div>
          </StyledFilter>
        </div>
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