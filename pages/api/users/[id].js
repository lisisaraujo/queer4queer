import dbConnect from "../../../db/connect";
import User from "../../../db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const user = await User.find({ userId: id });

    return response.status(200).json(user);
  }
}
