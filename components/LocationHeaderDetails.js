import {
  barIconLocationCard,
  clubIconLocationCard,
  cruisingIconLocationCard,
  communityIconLocationCard,
  otherIconLocationCard,
} from "../utils";
import styled from "styled-components";

export default function LocationCard({ specificLocation }) {
  return (
    <>
      <StyledLocationHeader>
        <div className="location-icon">
          {specificLocation.type === "Bar" && barIconLocationCard}
          {specificLocation.type === "Club" && clubIconLocationCard}
          {specificLocation.type === "Cruising" && cruisingIconLocationCard}
          {specificLocation.type === "Community-Center" &&
            communityIconLocationCard}
          {specificLocation.type === "Other" && otherIconLocationCard}
        </div>
        <div className="location-description">
          <h2>{specificLocation.name}</h2>
          <h4>{specificLocation.type}</h4>
          {specificLocation ? (
            <h4>
              {specificLocation.address} | {specificLocation.postcode} {specificLocation.city}
            </h4>
          ) : (
            <p>No address provided</p>
          )}
        </div>
      </StyledLocationHeader>
    </>
  );
}

const StyledLocationHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d3d3d3; /* Labels color */
  text-align: center;
  padding: 20px;
  background-color: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */

  .location-icon {
    padding: 20px;
    border-radius: 50%;
    background-color: rgba(0, 191, 255, 0.7); /* Accent color with opacity */
    margin-bottom: 20px;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;
    color: #d3d3d3; /* Labels color */
  }
`;