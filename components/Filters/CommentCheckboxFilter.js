// import React, { useState } from "react";
// import {
//   ageCategories,
//   genderCategories,
//   sexualOrientationCategories,
//   bipocCategories,
// } from "../../utils";
// import styled from "styled-components";

// export default function CommentCheckBoxFilter({
//   selectedFilters,
//   handleFilterChange,
// }) {
//   const handleCheckboxChange = (event, category) => {
//     const { value, checked } = event.target;
//     const updatedFilters = {
//       ...selectedFilters,
//       [category]: [...selectedFilters[category]],
//     };

//     if (checked) {
//       updatedFilters[category].push(value);
//     } else {
//       updatedFilters[category] = updatedFilters[category].filter(
//         (item) => item !== value
//       );
//     }

//     handleFilterChange(updatedFilters);
//   };

//   return (
//     <StyledFilter>
//       <CollapsibleContainer
//         label="Age"
//         options={ageCategories}
//         selectedOptions={selectedFilters.age}
//         onToggleOption={(option) => handleCheckboxChange(option, "age")}
//       />
//       <CollapsibleContainer
//         label="Sexual Orientation"
//         options={sexualOrientationCategories}
//         selectedOptions={selectedFilters.sexual_orientation}
//         onToggleOption={(option) =>
//           handleCheckboxChange(option, "sexual_orientation")
//         }
//       />
//       <CollapsibleContainer
//         label="Gender"
//         options={genderCategories}
//         selectedOptions={selectedFilters.gender}
//         onToggleOption={(option) => handleCheckboxChange(option, "gender")}
//       />
//       <CollapsibleContainer
//         label="BiPoc"
//         options={bipocCategories}
//         selectedOptions={selectedFilters.bipoc}
//         onToggleOption={(option) => handleCheckboxChange(option, "bipoc")}
//       />
//     </StyledFilter>
//   );
// }

// const StyledFilter = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   height: 60vh;
// `;

// const CollapsibleContainer = ({
//   label,
//   options,
//   selectedOptions,
//   onToggleOption,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <label onClick={() => setIsOpen(!isOpen)}>{label}</label>
//       {isOpen && (
//         <ul>
//           {options.map((option) => (
//             <li key={option.value}>
//               <input
//                 type="checkbox"
//                 value={option.value}
//                 checked={selectedOptions.includes(option.value)}
//                 onChange={() => onToggleOption(option)}
//               />
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
