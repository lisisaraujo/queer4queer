import styled from "styled-components";
import Select from "react-select";
import {
  genderCategories,
  sexualOrientationCategories,
  colorStyles,
  ageCategories,
  bipocCategories,
} from "../../utils";

export default function CommentFilter({
  setSelectedAgeOptions,
  selectedAgeOptions,
  setSelectedGenderOptions,
  selectedGenderOptions,
  setSelectedsexualOrientationOption,
  selectedsexualOrientationOption,
  selectedBipocOption,
  setSelectedBipocOption,
}) {
  return (
    <>
      <StyledFilter>
        <ul className="select-box">
          <label htmlFor="age">Age </label>{" "}
          <Select
            isMulti
            closeMenuOnSelect={false}
            blurInputOnSelect={false}
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
            onChange={setSelectedsexualOrientationOption}
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
            onChange={setSelectedGenderOptions}
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
            isMulti
            closeMenuOnSelect={false}
            blurInputOnSelect={false}
            defaultValue={selectedBipocOption}
            onChange={setSelectedBipocOption}
            options={bipocCategories}
            name="bipoc"
            styles={colorStyles}
            className="custom-select"
          />
        </ul>
      </StyledFilter>
    </>
  );
}

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
