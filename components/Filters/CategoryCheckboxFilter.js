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
          <li key={option.value}>
            <label>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedCategory.includes(option.value)}
                onChange={handleCheckboxChange}
              />
              {option.label}
            </label>
          </li>
        ))}
      </StyledCheckboxFilter>
    </>
  );
}

const StyledCheckboxFilter = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  list-style: none;
  margin: 0;

  li {
    margin: 10px 0;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
    color: #d3d3d3; /* Labels color */
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(75, 0, 130, 0.8); /* Streets color with opacity */
    }

    input {
      margin-right: 10px;
      accent-color: #4b0082; /* Streets color */
    }
  }
`;