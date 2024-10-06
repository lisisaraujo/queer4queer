import { FaGlassMartiniAlt } from "react-icons/fa";
import { MdNoPhotography } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdDirectionsBoat } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

export const typeCategoryOptions = [
  { label: "All", value: "" },
  { label: "Bar", value: "Bar" },
  { label: "Club", value: "Club" },
  { label: "Cruising", value: "Cruising" },
  { label: "Community-Center", value: "Community-Center" },
  { label: "Other", value: "Other" },
];

export const ageCategoriesArr = [
  "Select",
  ">18",
  "18-25",
  "26-35",
  "36-45",
  "46-55",
  "55+",
];

export const sexualOrientationCategoriesArr = [
  "Select",
  "Lesbian",
  "Gay",
  "Pansexual",
  "Bisexual",
  "Asexual",
  "Aromantic",
  "Queer",
  "Demisexual",
  "Heterosexual",
  "Other",
];

export const genderCategoriesArr = [
  "Select",
  "Genderfluid",
  "Genderqueer",
  "Transgender male",
  "Transgender female",
  "Nonbinary",
  "Intersex",
  "Cisgender female",
  "Cisgender male",
  "I don't know",
  "Other",
];

export const dropDownSelectColorStyle = {
  control: (styles) => ({ ...styles, backgroundColor: "#1c1c1c", color: "#F5A9B8", borderColor: "#6a0dad" }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "#6a0dad" : isFocused ? "rgba(91, 206, 250, 0.6)" : "#1c1c1c",
      color: "#F5A9B8",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
  singleValue: (styles) => ({ ...styles, color: "#F5A9B8" }),
  placeholder: (styles) => ({ ...styles, color: "#F5A9B8" }),
};

export const ageCategories = [
  { value: ">18", label: ">18" },
  { value: "18-25", label: "18-25" },
  { value: "26-35", label: "26-35" },
  { value: "36-45", label: "36-45" },
  { value: "46-55", label: "46-55" },
  { value: "55+", label: "55+" },
];

export const sexualOrientationCategories = [
  { value: "Lesbian", label: "Lesbian" },
  { value: "Gay", label: "Gay" },
  { value: "Pansexual", label: "Pansexual" },
  { value: "Bisexual", label: "Bisexual" },
  { value: "Asexual", label: "Asexual" },
  { value: "Aromantic", label: "Aromantic" },
  { value: "Queer", label: "Queer" },
  { value: "Demisexual", label: "Demisexual" },
  { value: "Heterosexual", label: "Heterosexual" },
  { value: "Other", label: "Other" },
];

export const genderCategories = [
  { value: "Genderfluid", label: "Genderfluid" },
  { value: "Genderqueer", label: "Genderqueer" },
  { value: "Transgender male", label: "Transgender male" },
  { value: "Transgender female", label: "Transgender female" },
  { value: "Nonbinary", label: "Nonbinary" },
  { value: "Intersex", label: "Intersex" },
  { value: "Cisgender female", label: "Cisgender female" },
  { value: "Cisgender male", label: "Cisgender male" },
  { value: "I don’t know", label: "I don’t know" },
  { value: "Other", label: "Other" },
];

export const bipocCategories = [
  { value: "Yes", label: "Yes" },
  { value: "", label: "No" },
];


export const iconStylesMap = {
  display: "flex",
  width: "18px",
  height: "18px",
  flexShrink: "0",
  color: "#F5A9B8",
};

export const iconStylesLocationCard = {
  color: "#F5A9B8",
  fontSize: "2em",
  cursor: "pointer",
};

export const barIconMap = <FaGlassMartiniAlt style={iconStylesMap} />;
export const clubIconMap = <MdNoPhotography style={iconStylesMap} />;
export const cruisingIconMap = <MdDirectionsBoat style={iconStylesMap} />;
export const communityIconMap = <IoIosPeople style={iconStylesMap} />;
export const otherIconMap = <MdLocationOn style={iconStylesMap} />;
export const mapIcons = <SlLocationPin style={iconStylesMap} />;

export const barIconLocationCard = (
  <FaGlassMartiniAlt style={iconStylesLocationCard} />
);
export const clubIconLocationCard = (
  <MdNoPhotography style={iconStylesLocationCard} />
);
export const cruisingIconLocationCard = (
  <MdDirectionsBoat style={iconStylesLocationCard} />
);
export const communityIconLocationCard = (
  <IoIosPeople style={iconStylesLocationCard} />
);
export const otherIconLocationCard = (
  <MdLocationOn style={iconStylesLocationCard} />
);

export const selectData = [
  {
    label: "Age:",
    options: ageCategories,
    name: "age",
  },
  {
    label: "Sexual Orientation:",
    options: sexualOrientationCategories,
    name: "sexual_orientation",
  },
  {
    label: "Gender:",
    options: genderCategories,
    name: "gender",
  },
  {
    label: "BiPoC:",
    options: bipocCategories,
    name: "bipoc",
  },
];