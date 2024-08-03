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

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function MyMap() {
  const locationNameStyle = {
    color: "white",
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
      <ReactMapGL
        mapStyle="mapbox://styles/laraujo/clzczlsgl00aw01qr1pjabs28"
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
              <Link
                href={`/location-page/${location._id}`}
                location-id={location._id}
                role="icon"
                onClick={onMarker}
                aria-label="push-pin"
              >
                {location.type === "Bar" && barIconMap}
                {location.type === "Club" && clubIconMap}
                {location.type === "Cruising" && cruisingIconMap}
                {location.type === "Community-Center" && communityIconMap}
                {location.type === "Other" && otherIconMap}
              </Link>
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
      </ReactMapGL>
    </>
  );
}
