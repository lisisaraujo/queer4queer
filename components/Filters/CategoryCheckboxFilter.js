import React from "react";
import { typeCategoryOptions } from "../../utils";
import styled from "styled-components";

export default function CategoryCheckboxFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategory([...selectedCategory, value]);
    } else {
      setSelectedCategory(selectedCategory.filter((item) => item !== value));
    }
  };

  return (
    <>
      <StyledCheckboxFilter>
        {typeCategoryOptions.map((option) => (
          <ul key={option.value}>
            <label>
              {option.label}
              <input
                type="checkbox"
                value={option.value}
                checked={selectedCategory.includes(option.value)}
                onChange={handleCheckboxChange}
              />
            </label>
          </ul>
        ))}
      </StyledCheckboxFilter>
    </>
  );
}

const StyledCheckboxFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 15em;

  label {
    display: flex;
    justify-content: space-between;
    margin: 5% 10%;
  }
`;
