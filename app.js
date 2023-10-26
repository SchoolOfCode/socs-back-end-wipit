// import dependencies required to create server
import express from "express";
import morgan from "morgan";
// frontend client makes request to external backend server using cors
import cors from "cors";
import resourcesRouter from "./resources/resources.router.js";

const app = express();

// Specified port that frontend will use to connect to backend api, allowed to use specified methods
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);
app.use(morgan("dev"));
// takes requests and changes them to JSON format
app.use(express.json());
// call frontend as a static website within the public folder
app.use(express.static("public"));
// define route for api
app.use("/api/resources", resourcesRouter);

export default app;
