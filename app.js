import express from "express";
import dotenv from "dotenv";
import middleware from "./middleware.js";
dotenv.config();
const app = express();
middleware(app);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});
