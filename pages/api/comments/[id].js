import dbConnect from "../../../db/connect";
import Comment from "../../../db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const comments = await Comment.find({ location: id });
      // console.log("COMMENTS: ", id, comments);
      return response.status(200).json(comments);
    } catch (error) {
      return response.status(404).json("Error", error);
    }
  }

  if (request.method === "DELETE") {
    const comment = await Comment.findByIdAndDelete(id);
    return response.status(200).json(comment);
  }
}
