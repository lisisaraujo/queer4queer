import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { useRouter } from "next/router";
import { AddressAutofill } from "@mapbox/search-js-react";
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
          />
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
            <StyledSelect
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
  color: #F5A9B8; /* Labels color */
  background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px 0;

  .location-input-field {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 8px;
    width: 100%;
  }

  .address-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    width: 100%;
  }

  label {
    color: #F5A9B8; /* Labels color */
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  input {
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #6a0dad; /* Streets color */
    background: rgba(28, 28, 28, 0.8); /* Base color with opacity */
    color: #F5A9B8; /* Labels color */
  }

  @media (max-width: 768px) {
    .location-input-field,
    .address-input {
      gap: 15px;
    }

    label {
      font-size: 0.9rem;
    }

    input {
      padding: 8px;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 480px) {
    .location-input-field,
    .address-input {
      gap: 10px;
    }

    label {
      font-size: 0.8rem;
    }

    input {
      padding: 6px;
      margin-bottom: 6px;
    }
  }
`;

const StyledSelect = styled(Select)`
  .react-select__control {
    background: rgba(28, 28, 28, 0.8); /* Base color with opacity */
    border: 1px solid #6a0dad; /* Streets color */
    color: #F5A9B8; /* Labels color */
    border-radius: 5px;
    padding: 5px;
    font-size: 1rem;
  }

  .react-select__menu {
    background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
    color: #F5A9B8; /* Labels color */
  }

  .react-select__option {
    background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
    color: #F5A9B8; /* Labels color */
    &:hover {
      background: rgba(91, 206, 250, 0.6); /* Accent color on hover */
    }
  }

  .react-select__single-value {
    color: #F5A9B8; /* Labels color */
  }

  .react-select__placeholder {
    color: #F5A9B8; /* Labels color */
  }
`;