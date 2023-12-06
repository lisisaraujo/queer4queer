import dbConnect from "../../../db/connect";
import Location from "../../../db/models/Location";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const locations = await Location.find();
      return response.status(200).json(locations);
    } catch (error) {
      return response.status(404).json("Error");
    }
  }
}
