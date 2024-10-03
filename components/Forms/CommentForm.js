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
    <div>
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
    </div>
  );
}

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: center;
  margin-top: 5vh;
  justify-content: space-evenly;
  background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .comment-card {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .demographic-data {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    align-content: space-around;
  }

  .submit-button {
    width: 120px;
    height: 50px;
    align-self: center;
    background-color: rgba(75, 0, 130, 0.7); /* Streets color with opacity */
    box-shadow: 0px 0px 5px 3px rgba(90, 90, 90, 0.75);
    border-radius: 10px;
    margin-bottom: 10%;
    border-style: none;
    margin-top: 10px;
    color: #d3d3d3; /* Labels color */
    font-size: 1.2em;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0px 0px 18px 2px rgba(125, 125, 125, 0.75);
    }
  }

  textarea {
    display: flex;
    position: relative;
    background-color: rgba(28, 28, 28, 0.8); /* Base color with opacity */
    border: 1px solid #4b0082; /* Streets color */
    padding: 15px;
    text-align: left;
    min-width: 18.5rem;
    height: 11.125rem;
    margin: 15px auto 40px auto;
    color: #d3d3d3; /* Labels color */
    border-radius: 8px;
  }

  input {
    color: #d3d3d3; /* Labels color */
    border-radius: 5px;
    border: 1px solid #4b0082; /* Streets color */
    padding: 10px;
    background: rgba(28, 28, 28, 0.8); /* Base color with opacity */
  }

  .checkbox {
    font-size: 1.2em;
    display: flex;
    justify-content: space-evenly;
    margin: 10px auto;
  }

  @media (max-width: 768px) {
    padding: 15px;

    .comment-card {
      margin-bottom: 15px;
    }

    .submit-button {
      width: 100px;
      height: 45px;
      font-size: 1em;
    }

    textarea {
      padding: 12px;
      height: 10rem;
    }

    input {
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    .comment-card {
      margin-bottom: 10px;
    }

    .submit-button {
      width: 90px;
      height: 40px;
      font-size: 0.9em;
    }

    textarea {
      padding: 10px;
      height: 9rem;
    }

    input {
      padding: 6px;
    }
  }
`;

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 60vh;
  width: 100%;

  .select-box {
    width: 100%;
    margin-bottom: 15px;
  }

  label {
    color: #d3d3d3; /* Labels color */
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .custom-select {
    width: 100%;
  }

  @media (max-width: 768px) {
    .select-box {
      margin-bottom: 10px;
    }

    label {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .select-box {
      margin-bottom: 8px;
    }

    label {
      font-size: 0.8rem;
    }
  }
`;