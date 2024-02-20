import GeocoderService from "@mapbox/mapbox-sdk/services/geocoding";

export const geocoder = GeocoderService({ accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN });



