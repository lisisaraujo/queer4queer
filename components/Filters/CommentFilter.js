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
        <div className="select-box">
          <label htmlFor="age">Age</label>
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
        </div>
        <div className="select-box">
          <label htmlFor="sexual-orientation">Sexual Orientation</label>
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
        </div>
        <div className="select-box">
          <label htmlFor="gender">Gender</label>
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
        </div>
        <div className="select-box">
          <label htmlFor="bipoc">BiPoc</label>
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
        </div>
      </StyledFilter>
    </>
  );
}

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 60vh;
  width: 100%;
  padding: 20px;
  background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .select-box {
    width: 100%;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: #d3d3d3; /* Labels color */
    font-size: 1rem;
    font-weight: 600;
  }

  .custom-select {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 10px;

    .select-box {
      margin-bottom: 15px;
    }

    label {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 5px;

    .select-box {
      margin-bottom: 10px;
    }

    label {
      font-size: 0.8rem;
    }
  }
`;