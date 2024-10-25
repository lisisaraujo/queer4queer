import styled from "styled-components";
import {
  genderCategories,
  sexualOrientationCategories,
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
  const handleTagClick = (value, selectedOptions, setSelectedOptions) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <>
      <StyledFilter>
        <div className="select-box">
          <label htmlFor="age">Age</label>
          <TagContainer>
            {ageCategories.map((option) => (
              <Tag
                key={option.value}
                selected={selectedAgeOptions.includes(option.value)}
                onClick={() => handleTagClick(option.value, selectedAgeOptions, setSelectedAgeOptions)}
              >
                {option.label}
              </Tag>
            ))}
          </TagContainer>
        </div>
        <div className="select-box">
          <label htmlFor="sexual-orientation">Sexual Orientation</label>
          <TagContainer>
            {sexualOrientationCategories.map((option) => (
              <Tag
                key={option.value}
                selected={selectedsexualOrientationOption.includes(option.value)}
                onClick={() => handleTagClick(option.value, selectedsexualOrientationOption, setSelectedsexualOrientationOption)}
              >
                {option.label}
              </Tag>
            ))}
          </TagContainer>
        </div>
        <div className="select-box">
          <label htmlFor="gender">Gender</label>
          <TagContainer>
            {genderCategories.map((option) => (
              <Tag
                key={option.value}
                selected={selectedGenderOptions.includes(option.value)}
                onClick={() => handleTagClick(option.value, selectedGenderOptions, setSelectedGenderOptions)}
              >
                {option.label}
              </Tag>
            ))}
          </TagContainer>
        </div>
        <div className="select-box">
          <label htmlFor="bipoc">BIPC (Black, Indigenous, People of Color) </label>
          <TagContainer>
            {bipocCategories.map((option) => (
              <Tag
                key={option.value}
                selected={selectedBipocOption.includes(option.value)}
                onClick={() => handleTagClick(option.value, selectedBipocOption, setSelectedBipocOption)}
              >
                {option.label}
              </Tag>
            ))}
          </TagContainer>
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
  max-height: 60vh; // Use max-height instead of height
  width: 100%;
  padding: 20px;
  background: rgba(28, 28, 28, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto; // Allow vertical scrolling

  .select-box {
    width: 100%;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: #F5A9B8;
    font-size: 1rem;
    font-weight: 600;
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

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.div`
  background: ${(props) =>
    props.selected ? "rgba(91, 206, 250, 0.6)" : "rgba(28, 28, 28, 0.9)"};
  color: #f5a9b8; /* Labels color */
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  border: 1px solid #6a0dad; /* Border color */

  &:hover {
    background: rgba(91, 206, 250, 0.8);
  }
`;