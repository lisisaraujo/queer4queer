import React, { useState, useEffect, useMemo } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import useSWR from 'swr';
import Link from "next/link";
import Navbar from "./Navbar";
import ModalAddLocationForm from "./Modals/ModalAddLocationForm";
import {
  barIconMap,
  clubIconMap,
  cruisingIconMap,
  communityIconMap,
  otherIconMap,
} from "../utils";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function MyMap() {
  const locationNameStyle = {
    color: "#d3d3d3", // Labels color
  };

  const { data: locations, error, mutate } = useSWR('/api/locations', fetcher);

  console.log("locations:", locations)
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 12,
  });

  // Update filtered locations when locations or selectedCategory change
  const filteredLocations = useMemo(() => {
    if (!locations) return [];
    if (!selectedCategory || selectedCategory === "") return locations;
    return locations.filter((location) => selectedCategory.includes(location.type));
  }, [locations, selectedCategory]);

  const onMarker = (event) => {
    const id = event.currentTarget.getAttribute("location-id");
    const location = locations.find((l) => l._id === id);
    setSelectedLocation(location);
  };

  if (error) return <div>Failed to load locations</div>;
  if (!locations) return <div>Loading...</div>;

  return (
    <>
      <StyledMap
        mapStyle="mapbox://styles/laraujo/cm1tplg6900i301pg7j1eg7ps"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        {...viewport}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          loadLocations={mutate} // Use mutate to refresh locations
        />
        {filteredLocations.map((location) => (
          <div key={location._id}>
            <Marker
              longitude={parseFloat(location.lngLat[1])}
              latitude={parseFloat(location.lngLat[0])}
              style={{ cursor: "pointer" }}
            >
              <p className="location-name" style={locationNameStyle}>
                {location.name}
              </p>
              <StyledLink
                href={`/location-page/${location._id}`}
                location-id={location._id}
                role="icon"
                onClick={onMarker}
                aria-label="push-pin"
              >
                <IconWrapper>
                  {location.type === "Bar" && barIconMap}
                  {location.type === "Club" && clubIconMap}
                  {location.type === "Cruising" && cruisingIconMap}
                  {location.type === "Community-Center" && communityIconMap}
                  {location.type === "Other" && otherIconMap}
                </IconWrapper>
              </StyledLink>
            </Marker>
          </div>
        ))}

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          position="bottom-left"
        />
        <div className="add-location">
          <ModalAddLocationForm mutateLocations={mutate} />
        </div>
      </StyledMap>
    </>
  );
}

const StyledMap = styled(ReactMapGL)`
  width: 100vw;
  height: 100vh;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  background-color: rgba(75, 0, 130, 0.4); 
  border-radius: 50%;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(75, 0, 130, 0.7); 
  }
`;