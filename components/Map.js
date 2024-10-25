import React, { useState, useMemo, useEffect } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl } from "react-map-gl";
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
  artAndcultureMap,
} from "../utils";
import styled from "styled-components";
import 'mapbox-gl/dist/mapbox-gl.css';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function MyMap() {
  const locationNameStyle = {
    color: "#F5A9B8",
    maxWidth: "150px",
    wordWrap: "break-word",
    whiteSpace: "normal",
  };

  const { data: locations, error, mutate } = useSWR('/api/locations', fetcher);

  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 12,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setViewport({
          ...viewport,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 14, // Adjust zoom level as needed
        });
      },
      (error) => {
        console.error(error);
        // Fallback to Berlin coordinates if location access is denied
        setViewport({
          ...viewport,
          latitude: 52.5072,
          longitude: 13.4247,
          zoom: 12,
        });
      },
      { enableHighAccuracy: true }
    );
  }, []);

  const filteredLocations = useMemo(() => {
    if (!locations) return [];
    let filtered = locations;
    if (selectedCategory && selectedCategory !== "") {
      filtered = filtered.filter((location) => selectedCategory.includes(location.type));
    }
    if (searchTerm && searchTerm !== "") {
      filtered = filtered.filter((location) =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [locations, selectedCategory, searchTerm]);

  const onMarker = (event) => {
    const id = event.currentTarget.getAttribute("location-id");
    const location = locations.find((l) => l._id === id);
    setSelectedLocation(location);
  };

  const handleSelectLocation = (location) => {
    // Update viewport to center on selected location
    setViewport({
      ...viewport,
      latitude: parseFloat(location.lngLat[0]),
      longitude: parseFloat(location.lngLat[1]),
      zoom: 14 // Adjust zoom level as needed
    });
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
          loadLocations={mutate}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locations={filteredLocations} // Pass filtered locations to Navbar
          onSelectLocation={handleSelectLocation}
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
                  {location.type === "Art-&-Culture" && artAndcultureMap}
                  {location.type === "Other" && otherIconMap}
                </IconWrapper>
              </StyledLink>
            </Marker>
          </div>
        ))}

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserLocation={true} // Ensure user location is shown
          fitBoundsOptions={{ maxZoom: 15 }} // Adjust max zoom level as needed
          position="bottom-left"
        />
        <NavigationControl position="bottom-left" />
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
  background-color: rgba(91, 206, 250, 0.3);
  border-radius: 50%;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(91, 206, 250, 0.6);
  }
`;