import React, { useState } from "react";
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
  const [openCategory, setOpenCategory] = useState(null);

  const handleTagClick = (value, selectedOptions, setSelectedOptions) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <StyledFilter>
      <FilterSection>
        <CategoryLabel onClick={() => toggleCategory("age")}>
          Age {openCategory === "age" ? "▲" : "▼"}
        </CategoryLabel>
        {openCategory === "age" && (
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
        )}
      </FilterSection>

      <FilterSection>
        <CategoryLabel onClick={() => toggleCategory("sexualOrientation")}>
          Sexual Orientation {openCategory === "sexualOrientation" ? "▲" : "▼"}
        </CategoryLabel>
        {openCategory === "sexualOrientation" && (
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
        )}
      </FilterSection>

      <FilterSection>
        <CategoryLabel onClick={() => toggleCategory("gender")}>
          Gender {openCategory === "gender" ? "▲" : "▼"}
        </CategoryLabel>
        {openCategory === "gender" && (
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
        )}
      </FilterSection>

      <FilterSection>
        <CategoryLabel onClick={() => toggleCategory("bipoc")}>
          BiPoc {openCategory === "bipoc" ? "▲" : "▼"}
        </CategoryLabel>
        {openCategory === "bipoc" && (
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
        )}
      </FilterSection>
    </StyledFilter>
  );
}

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: rgba(28, 28, 28, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FilterSection = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const CategoryLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #F5A9B8; /* Labels color */
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: rgba(91,206,250,0.8); /* Change color on hover */
    transition: color .3s ease; /* Smooth transition */
  }
`;

const TagContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
`;

const Tag = styled.div`
   background: ${(props) =>
    props.selected ? "rgba(91,206,250,0.6)" : "rgba(28,28,28,.9)"};
   color: #F5A9B8; /* Labels color */
   padding:10px; 
   border-radius :20px; 
   cursor:pointer; 
   transition :background .3s ease,color .3s ease; 
   border :1px solid #6a0dad; /* Border color */

   &:hover {
     background :rgba(91,206,250,.8);
   }
`;