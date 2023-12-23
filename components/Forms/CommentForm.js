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
        <input type="hidden" name="location" value={locationID}></input>
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
            <ul className="select-box">
              <label htmlFor="age">Age </label>{" "}
              <Select
                closeMenuOnSelect={true}
                defaultValue={selectedAgeOptions}
                onChange={setSelectedAgeOptions}
                options={ageCategories}
                name="age"
                styles={colorStyles}
                className="custom-select"
              />
            </ul>
            <ul className="select-box">
              <label htmlFor="sexual-orientation">Sexual Orientation </label>{" "}
              <Select
                isMulti
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                defaultValue={selectedsexualOrientationOption}
                onChange={(selectedOptions) =>
                  setSelectedsexualOrientationOption([...selectedOptions])
                }
                options={sexualOrientationCategories}
                name="sexual_orientation"
                styles={colorStyles}
                className="custom-select"
              />
            </ul>
            <ul className="select-box">
              {" "}
              <label htmlFor="gender">Gender </label>
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
            </ul>

            <ul className="select-box">
              {" "}
              <label htmlFor="bipoc">BiPoc </label>
              <Select
                closeMenuOnSelect={true}
                defaultValue={selectedBipocOption}
                onChange={setSelectedBipocOption}
                options={bipocCategories}
                name="bipoc"
                styles={colorStyles}
                className="custom-select"
              />
            </ul>
          </StyledFilter>
          {/* {selectData.map((selectItem) => (
            <ul key={selectItem.name}>
              <label htmlFor={selectItem.name}>{selectItem.label}</label>
              <Select
                isMulti
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={selectItem.options}
                name={selectItem.name}
                styles={colorStyles}
              />
            </ul>
          ))} */}
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

  .comment-card {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%; /* Adjust width for responsiveness */
    max-width: 500px; /* Set a max-width for content */
    font-weight: 700;
  }

  .demographic-data {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    align-content: space-around;
  }

  ul {
    margin-bottom: 15px;
  }
  .submit-button {
    width: 120px;
    height: 50px;
    align-self: center;
    background-color: rgba(1, 72, 224, 0.7);
    box-shadow: 0px 0px 5px 3px rgba(90, 90, 90, 0.75);
    border-radius: 10px;
    margin-bottom: 10%;
    border-style: none;
    margin-top: 10px;
    color: whitesmoke;
    font-size: 1.2em;
    &:hover {
      box-shadow: 0px 0px 18px 2px rgba(125, 125, 125, 0.75);
    }
  }

  textarea {
    display: flex;
    position: relative;
    background-color: rgb(60, 60, 60);
    border: 1px solid #d0d5dd;
    padding: 15px;

    text-align: left;
    min-width: 18.5rem;
    height: 11.125rem;
    margin: 15px auto 40px auto;
    background-color: whitesmoke;
  }

  input {
    color: black;
    border-radius: 5px;
    border-style: none;
    padding: 10px;
  }
  .checkbox {
    font-size: 1.2em;
    display: flex;
    justify-content: space-evenly;
    margin: 10px auto;
  }
`;

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; /* Center content vertically */
  height: 60vh; /* Make the container full height */

  ul {
    align-items: stretch;
    /* margin-bottom: 5px; */
  }
`;
