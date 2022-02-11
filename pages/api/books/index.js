import { parseBody } from "next/dist/server/api-utils";

const { books } = require("./data.json");

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(books);
  } else {
    res.setHeader("Allow", [GET]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
