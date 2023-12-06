import dbConnect from "../../../db/connect";
import User from "../../../db/models/User";
import { hashPassword } from "../../../db/models/utils";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { name, email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }

  await dbConnect();

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = User.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json(result);
}

export default handler;
