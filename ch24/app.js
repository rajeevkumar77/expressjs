import express from "express";
import web from "./routes/web.js";
import session from "express-session";
const app = express();
const port = process.env.PORT || "3000";

// Session
app.use(
  session({
    name: "sessiongeek",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 200000 },
  })
);

// Load Routes
app.use("/", web);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
