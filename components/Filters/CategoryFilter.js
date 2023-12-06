import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { colorStyles, typeCategoryOptions } from "../../utils";

export default function CategoryFilter({ setSelectedCategory }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
    setSelectedCategory(selectedOptions.map((option) => option.value));
  };

  const indicatorSeparatorStyle = {
    alignSelf: "stretch",
    backgroundColor: "grey",
    marginBottom: 8,
    marginTop: 8,
    width: 1,
  };

  const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  return (
    <StyledFilter>
      <Select
        isMulti
        options={typeCategoryOptions}
        onChange={handleCategoryChange}
        components={{ IndicatorSeparator }}
        value={selectedCategories}
        className="category-select"
        styles={colorStyles}
        closeMenuOnSelect={false}
        defaultValue={""}
      />
    </StyledFilter>
  );
}

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  width: fit-content;
  height: fit-content;
  border-color: transparent;
`;
