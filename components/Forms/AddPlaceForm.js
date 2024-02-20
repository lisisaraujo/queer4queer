import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { useRouter } from "next/router";
import { AddressAutofill } from "@mapbox/search-js-react";
import { accessToken } from "../../mapbox";
import { selectFilterColorStyles, typeCategoryOptions } from "../../utils";

export default function AddPlaceForm({ locationID, handleSubmit }) {
  const router = useRouter();

  return (
    <>
      <EntryForm onSubmit={handleSubmit} id="add-location-form">
        <InputWrapper>
          <input
            type="hidden"
            id="location"
            name="location"
            value={locationID}
          ></input>
          <div className="location-input-field">
            <label htmlFor="name">Name of location:</label>
            <input id="name" name="name" />
            <div className="address-input">
              <label htmlFor="address">Address:</label>
              <AddressAutofill accessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}>
                <input
                  name="address"
                  placeholder="Address"
                  type="text"
                  autoComplete="address"
                />
                <input
                  name="city"
                  placeholder="City"
                  type="text"
                  autoComplete="address-level2"
                />
                <input
                  name="postcode"
                  placeholder="Postcode"
                  type="text"
                  autoComplete="postal-code"
                />
              </AddressAutofill>
            </div>
            <label htmlFor="type">What type of location is it?</label>
            <Select
              defaultValue={null}
              options={typeCategoryOptions}
              name="type"
              styles={selectFilterColorStyles}
            />
          </div>
        </InputWrapper>
      </EntryForm>
    </>
  );
}

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;
  height: 100%;
  color: black;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 60px 30px 30px 30px;

  .location-input-field {
    display: flex;
    margin-top: 10%;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
  }

  .address-input {
    display: flex;

    flex-direction: column;
    /* gap: 20px; */
    border-radius: 10px;
  }

  input {
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;
