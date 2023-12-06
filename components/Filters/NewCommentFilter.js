import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import styled from "styled-components";
import { colorStyles, ageCategories } from "../../utils";

export default function CategoryFilter({ comments }) {
  const [selectedAgeCategories, setSelectedAgeCategories] = useState([]);
  const [filteredComments, setFilteredComments] = useState(comments);
  const [selectedAgeCategory, setSelectedAgeCategory] = useState("");

  useEffect(() => {
    setFilteredComments(comments);
  }, [comments]);

  const getFilteredList = () => {
    let filtered = [...filteredComments];

    if (!selectedAgeCategory || selectedAgeCategory.includes("")) {
      return filtered;
    }

    filtered = filtered.filter((comment) =>
      selectedAgeCategory.includes(comment.age)
    );

    return filtered;
  };

  const filteredList = useMemo(getFilteredList, [
    selectedAgeCategory,
    filteredComments,
  ]);

  const handleCategoryChange = (selectedOptions) => {
    setSelectedAgeCategories(selectedOptions);
    setSelectedAgeCategory(selectedOptions.map((option) => option.value));
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
        options={ageCategories}
        onChange={handleCategoryChange}
        components={{ IndicatorSeparator }}
        value={selectedAgeCategories}
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
