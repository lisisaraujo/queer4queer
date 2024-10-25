import {
  barIconLocationCard,
  clubIconLocationCard,
  cruisingIconLocationCard,
  communityIconLocationCard,
  otherIconLocationCard,
  artAndcultureLocationCard,
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
          {specificLocation.type === "Art-&-Culture" && artAndcultureLocationCard}
          {specificLocation.type === "Other" && otherIconLocationCard}
        </div>
        <div className="location-description">
          <h2>{specificLocation.name}</h2>
          <h4>{specificLocation.type}</h4>
          {specificLocation ? (
            <h4>
              {specificLocation.address && specificLocation.address.includes(",")
                ? specificLocation.address.split(",")[0]
                : specificLocation.address}  | {specificLocation.postcode} {specificLocation.city}
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
  color: #F5A9B8; /* Labels color */
  text-align: center;
  padding: 20px;
  background-color: rgba(28, 28, 28, 0.7); /* Base color with opacity */
  border-radius: 30px; /* More rounded corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); /* Slightly larger shadow */
  border-bottom: 2px solid rgba(91, 206, 250, 0.3); /* Softer stroke color */
    // border-left: 1px solid rgba(91, 206, 250, 0.3); /* Softer stroke color */
    //   border-right: 1px solid rgba(91, 206, 250, 0.3); /* Softer stroke color */
        border-top: 2px solid rgba(91, 206, 250, 0.3); /* Softer stroke color */
  margin-bottom: 20px; /* Space below the header */

  .location-icon {
    padding: 20px;
    border-radius: 50%;
    background-color: rgba(91, 206, 250, 0.6); 
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
    margin: 5px 0;
    font-size: 16px;
  }
`;