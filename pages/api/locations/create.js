import dbConnect from "../../../db/connect";
import Location from "../../../db/models/Location";
import axios from "axios";

export default async function handler(req, response) {
  await dbConnect();
  const address = req.body.address;

  if (req.method === "POST") {
    try {
      const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

      const apiResponse = await axios.get(apiUrl);

      const apiResponseData = apiResponse.data.features[0];
      const coordinates = apiResponseData.center.reverse();

      const locationData = {
        ...req.body,
        address: address,
      };

      const newLocation = new Location(locationData);
      newLocation.lngLat.push(...coordinates);

      await newLocation.save();

      response.status(201).json({ status: "Location created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}