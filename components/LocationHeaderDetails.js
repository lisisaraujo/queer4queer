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
  flex-direction: column;
  display: flex;
  align-items: center;
  color: #101828;
  text-align: center;

  .location-icon {
    padding: 30px;
    border-radius: 50%;
    background-color: rgba(77, 150, 239, 0.5);
  }
  h2 {
    font-weight: bold;
  }
`;
