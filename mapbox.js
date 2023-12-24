import GeocoderService from "@mapbox/mapbox-sdk/services/geocoding";

export const accessToken =
  "pk.eyJ1IjoiZGFsYWxhbWFkIiwiYSI6ImNsZXk3OXIwNDBrcW8zcm4wNGx0c3JiZm0ifQ.JUyYd7DDfX7U3VxqY9b_KA";
  
export const MapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN;

export const geocoder = GeocoderService({ accessToken });



