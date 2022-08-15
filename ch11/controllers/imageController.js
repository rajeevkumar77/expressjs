import { join } from "path";

export const imageController = (req, res) => {
  res.sendFile(join(process.cwd(), "views", "index.html"));
};
