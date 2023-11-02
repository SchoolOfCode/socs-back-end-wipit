// import dependencies required to create server
import express from "express";
import morgan from "morgan";
// frontend client makes request to external backend server using cors
import cors from "cors";
import resourcesRouter from "./resources/resources.router.js";

const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "https://socs-ui.onrender.com/"],
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(morgan("dev"));
// takes requests and changes them to JSON format
app.use(express.json());
// define route for api
app.use("/api/resources", resourcesRouter);

export default app;
