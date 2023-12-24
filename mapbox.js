import GeocoderService from "@mapbox/mapbox-sdk/services/geocoding";

const MapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN;

export const geocoder = GeocoderService({ MapboxAccessToken });
