import React, { useState, useEffect, useMemo } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { accessToken } from "../mapbox";
import Link from "next/link";
import { GeolocateControl, NavigationControl } from "react-map-gl";
import Navbar from "./Navbar";
import ModalAddLocationForm from "./Modals/ModalAddLocationForm";
import {
  barIconMap,
  clubIconMap,
  cruisingIconMap,
  communityIconMap,
  otherIconMap,
  mapIcons,
} from "../utils";

export default function MyMap({ locations, loadLocations }) {
  const locationNameStyle = {
    color: "white",
  };
  const [selectedLocation, setSelectedLocation] = useState({});
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 52.5072,
    longitude: 13.4247,
    zoom: 12,
  });

  function onMarker(event) {
    const id = event.currentTarget.getAttribute("location-id");
    const location = locations.find((l) => l._id === id);

    setSelectedLocation(location);
  }

  useEffect(() => {
    setFilteredLocations(locations);
  }, [locations]);

  const getFilteredList = () => {
    let filtered = [...filteredLocations];

    if (!selectedCategory || selectedCategory.includes("")) {
      return filtered;
    }

    filtered = filtered.filter((location) =>
      selectedCategory.includes(location.type)
    );

    return filtered;
  };

  const filteredList = useMemo(getFilteredList, [
    selectedCategory,
    filteredLocations,
  ]);

  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/dalalamad/clf8n2lcn002001pjbso7lz8r"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        {...viewport}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          loadLocations={loadLocations}
        ></Navbar>
        {filteredList.map((location) => {
          return (
            <div key={location._id}>
              <Marker
                key={location._id}
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
                  {/* {location.type === "Bar" && mapIcons}
                  {location.type === "Club" && mapIcons}
                  {location.type === "Cruising" && mapIcons}
                  {location.type === "Community-Center" && mapIcons}
                  {location.type === "Other" && mapIcons} */}

                  {location.type === "Bar" && barIconMap}
                  {location.type === "Club" && clubIconMap}
                  {location.type === "Cruising" && cruisingIconMap}
                  {location.type === "Community-Center" && communityIconMap}
                  {location.type === "Other" && otherIconMap}
                </Link>
              </Marker>
              {/* {selectedLocation._id === location._id && (
                <div id="pop-up">
                  <Popup
                    anchor="bottom"
                    longitude={parseFloat(location.lngLat[1])}
                    latitude={parseFloat(location.lngLat[0])}
                    closeOnClick={false}
                  >
                    <div className="location-link">
                      <Link href={`/location-page/${location._id}`}>
                        {location.name}
                      </Link>
                    </div>
                  </Popup>
                </div>
              )} */}
            </div>
          );
        })}

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          position="bottom-left"
        />
        {/* <NavigationControl position="bottom-left" /> */}
        <div className="add-location">
          <ModalAddLocationForm loadLocations={loadLocations} />
        </div>
      </ReactMapGL>
    </>
  );
}
