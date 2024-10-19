import React from "react";
import { typeCategoryOptions } from "../../utils";
import styled from "styled-components";

export default function CategoryCheckboxFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  const handleTagClick = (value) => {
    if (value === "") {
      setSelectedCategory("")
    } else {
      if (selectedCategory.includes(value)) {
        setSelectedCategory(selectedCategory.filter((item) => item !== value));
      } else {
        setSelectedCategory([...selectedCategory, value]);
      }
    }
  };

  return (
    <>
      <StyledTagFilter>
        {typeCategoryOptions.map((option) => (
          <Tag
            key={option.value}
            selected={selectedCategory.includes(option.value)}
            onClick={() => handleTagClick(option.value)}
          >
            {option.label}
          </Tag>
        ))}
      </StyledTagFilter>
    </>
  );
}

const StyledTagFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  padding: 0;
  margin: 0;
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
