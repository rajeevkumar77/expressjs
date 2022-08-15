import { join } from "path";

export const contactController = (req, res) => {
  res.sendFile(join(process.cwd(), "views", "contact.html"));
};
